import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import cytoscape from 'cytoscape';

function useIsFullscreen() {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('fullscreen') === 'true';
}

export default function KnowledgeGraph() {
  const cyRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isFullscreen = useIsFullscreen();

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

          // Tooltip event handlers (proper placement)
          cy.on('mouseover', 'node', (evt) => {
            const nodeData = evt.target.data();
            if (tooltipRef.current) {
              tooltipRef.current.style.display = 'block';
              tooltipRef.current.style.left = `${evt.originalEvent.pageX + 10}px`;
              tooltipRef.current.style.top = `${evt.originalEvent.pageY + 10}px`;
              tooltipRef.current.innerHTML = `<strong>${nodeData.label}</strong><br/>${nodeData.summary}<br/><em>Version: ${nodeData.version}</em>`;
            }
          });

          cy.on('mouseout', 'node', () => {
            if (tooltipRef.current) {
              tooltipRef.current.style.display = 'none';
            }
          });

        });
    }
  }, []);

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
            pointerEvents: 'none',
            fontSize: '12px',
            maxWidth: '200px',
            zIndex: 1000
          }} />
        </div>
      </div>
    );
  }

  return (
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
          pointerEvents: 'none',
          fontSize: '12px',
          maxWidth: '200px',
          zIndex: 1000
        }} />
      </div>
    </Layout>
  );
}
