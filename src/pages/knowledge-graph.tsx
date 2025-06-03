import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import cytoscape from 'cytoscape';

export default function KnowledgeGraph() {
  const cyRef = useRef<HTMLDivElement>(null);

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

          // Center the graph after initial layout
          cy.ready(() => {
            cy.fit();
          });

          // Node click behavior
          cy.on('tap', 'node', (evt) => {
            const nodeData = evt.target.data();
            const docPath = `/the-human-channel-site/docs/${nodeData.docPath}`;
            window.open(docPath, '_blank');
          });
        });
    }
  }, []);

  return (
    <Layout title="Knowledge Graph" description="Interactive protocol knowledge graph">
      <div style={{ height: '90vh', width: '100%' }} ref={cyRef}></div>
    </Layout>
  );
}
