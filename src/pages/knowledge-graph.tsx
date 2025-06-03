import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import cytoscape from 'cytoscape';

export default function KnowledgeGraph() {
  const cyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cyRef.current) {
      fetch('/graph/knowledge-graph.json')
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
                  'background-color': '#2e8556',
                  'text-outline-width': 2,
                  'text-outline-color': '#2e8556',
                  'font-weight': 'bold'
                }
              },
              {
                selector: 'edge',
                style: {
                  'label': 'data(relation)',
                  'width': 2,
                  'line-color': '#ccc',
                  'target-arrow-color': '#ccc',
                  'target-arrow-shape': 'triangle'
                }
              }
            ],
            elements: [
              ...data.nodes.map((node: any) => ({ data: node })),
              ...data.edges.map((edge: any) => ({ data: edge }))
            ],
            layout: { name: 'cose' }
          });
        });
    }
  }, []);

  return (
    <Layout title="Knowledge Graph" description="Interactive protocol knowledge graph">
      <div style={{ height: '80vh', width: '100%' }} ref={cyRef}></div>
    </Layout>
  );
}
