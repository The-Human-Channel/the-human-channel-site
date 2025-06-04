import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import cytoscape from 'cytoscape';

let tooltipTimer: ReturnType<typeof setTimeout> | null = null;

function useIsFullscreen() {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('fullscreen') === 'true';
}

export default function KnowledgeGraph() {
  const cyRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isFullscreen = useIsFullscreen();

  const [cyInstance, setCyInstance] = useState<any>(null);
  const [visibleTypes, setVisibleTypes] = useState<string[]>(['Protocol', 'Concept', 'Policy', 'Standard']);
  const [searchTerm, setSearchTerm] = useState<string>('');
  let tooltipTimer: any = null;

  useEffect(() => {
    if (cyRef.current) {
      fetch('/the-human-channel-site/graph/knowledge-graph.json')
        .then(res => res.json())
        .then(data => {
          const cy = cytoscape({
            container: cyRef.current,
            style: [
              {
                selector: 'node',
                style: {
                  'label': 'data(label)',
                  'text-valign': 'center',
                  'color': '#fff',
                  'text-outline-width': 1,
                  'font-weight': 'bold',
                  'font-size': '8px',
                  'width': '30px',
                  'height': '30px'
                }
              },
              {
                selector: 'edge',
                style: {
                  'label': 'data(relation)',
                  'width': 1.5,
                  'line-color': '#ccc',
                  'target-arrow-color': '#ccc',
                  'target-arrow-shape': 'triangle',
                  'font-size': '7px'
                }
              },
              {
                selector: '.protocol',
                style: { 'background-color': '#2e8556', 'text-outline-color': '#2e8556' }
              },
              {
                selector: '.concept',
                style: { 'background-color': '#497897', 'text-outline-color': '#497897' }
              },
              {
                selector: '.policy',
                style: { 'background-color': '#f65228', 'text-outline-color': '#f65228' }
              },
              {
                selector: '.standard',
                style: { 'background-color': '#9bcbd5', 'text-outline-color': '#9bcbd5' }
              }
            ],
            elements: [
              ...data.nodes.map((node: any) => ({
                data: node,
                classes: node.type.toLowerCase()
              })),
              ...data.edges.map((edge: any) => ({ data: edge }))
            ],
            layout: {
              name: 'cose',
              animate: true,
              fit: true,
              padding: 50
            },
            zoomingEnabled: true,
            minZoom: 0.5,
            maxZoom: 2,
            wheelSensitivity: 0.2
          });

          cy.ready(() => {
            cy.fit();
          });

          cy.on('tap', 'node', (evt) => {
            const nodeData = evt.target.data();
            const docPath = `/the-human-channel-site/docs/${nodeData.docPath}`;
            window.open(docPath, '_blank');
          });

          cy.on('mouseover', 'node', (evt: any) => {
  if (tooltipTimer) clearTimeout(tooltipTimer);

  const node = evt.target;
  const nodeData = node.data();
  const docUrl = `/the-human-channel-site/docs/${nodeData.docPath}`;

  tooltipRef.current!.innerHTML = `
    <strong>${nodeData.label}</strong><br/>
    ${nodeData.summary}<br/>
    <em>Version: ${nodeData.version}</em><br/>
    <a href="${docUrl}" target="_blank" style="color:#00bfff;">Open Spec ↗</a>
  `;

  const pos = node.renderedPosition();
  const containerRect = cyRef.current!.getBoundingClientRect();

  tooltipRef.current!.style.left = `${containerRect.left + pos.x}px`;
  tooltipRef.current!.style.top = `${containerRect.top + pos.y - 30}px`;
  tooltipRef.current!.style.display = 'block';
});

cy.on('mouseout', 'node', () => {
  tooltipTimer = setTimeout(() => {
    tooltipRef.current!.style.display = 'none';
  }, 400); // <-- ADD DELAY HERE
});


          setCyInstance(cy);
        });
    }
  }, []);

  useEffect(() => {
    if (!cyInstance) return;
    cyInstance.nodes().forEach((node: any) => {
      const data = node.data();
      const matchesType = visibleTypes.includes(data.type);
      const matchesSearch = searchTerm === '' || data.label.toLowerCase().includes(searchTerm.toLowerCase());
      node.style('display', matchesType && matchesSearch ? 'element' : 'none');
    });
  }, [cyInstance, visibleTypes, searchTerm]);

  if (isFullscreen) {
    return (
      <div style={{ height: '100vh', width: '100%', backgroundColor: '#fff' }}>
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
          <div ref={cyRef} style={{ height: '100%', width: '100%' }}></div>
          <div ref={tooltipRef} style={{
            position: 'absolute',
            backgroundColor: '#333',
            color: '#fff',
            padding: '8px',
            borderRadius: '5px',
            display: 'none',
            pointerEvents: 'auto',
            fontSize: '12px',
            maxWidth: '200px',
            zIndex: 1000
          }} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ padding: '10px', background: '#f9f9f9', borderBottom: '1px solid #ddd' }}>
        <div style={{ marginBottom: '10px' }}>
          <strong>Filter by Type:</strong>
          {['Protocol', 'Concept', 'Policy', 'Standard'].map((type) => (
            <label key={type} style={{ marginLeft: '10px' }}>
              <input
                type="checkbox"
                checked={visibleTypes.includes(type)}
                onChange={() => {
                  if (visibleTypes.includes(type)) {
                    setVisibleTypes(visibleTypes.filter((t) => t !== type));
                  } else {
                    setVisibleTypes([...visibleTypes, type]);
                  }
                }}
              />{' '}
              {type}
            </label>
          ))}
        </div>
        <div>
          <strong>Search:</strong>{' '}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search nodes..."
            style={{ padding: '5px', width: '200px' }}
          />
        </div>
      </div>

      <Layout title="Knowledge Graph" description="Interactive protocol knowledge graph">
        <div style={{ height: '90vh', width: '100%', position: 'relative' }}>
          <div ref={cyRef} style={{ height: '100%', width: '100%' }}></div>
          <div ref={tooltipRef} style={{
            position: 'absolute',
            backgroundColor: '#333',
            color: '#fff',
            padding: '8px',
            borderRadius: '5px',
            display: 'none',
            pointerEvents: 'auto',
            fontSize: '12px',
            maxWidth: '200px',
            zIndex: 1000
          }} />
        </div>
      </Layout>
    </>
  );
}
