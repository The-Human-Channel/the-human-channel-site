import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="The Human Channel"
      description="Restoring trust, permission, and human interaction in the AI era."
    >
      <main style={{padding: '2rem', textAlign: 'center'}}>
        <h1>Welcome to The Human Channel</h1>
        <p>Restoring trust, permission, and human interaction in the AI era.</p>
      </main>
    </Layout>
  );
}
