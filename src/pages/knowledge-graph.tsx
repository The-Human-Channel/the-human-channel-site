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
                style: [
  {
    selector: 'node',
    style: {
      'label': 'data(label)',
      'text-valign': 'center',
      'color': '#fff',
      'background-color': '#2e8556',
      'text-outline-width': 1,
      'text-outline-color': '#2e8556',
      'font-weight': 'bold',
      'font-size': '8px',        // 👈 Decrease font size
      'width': 30,               // 👈 Decrease node size
      'height': 30
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
      'font-size': '7px'         // 👈 Edge label smaller too
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
