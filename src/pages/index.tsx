import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="The Human Channel"
      description="Restoring trust, permission, and human interaction in the AI era.">
      <main style={{ textAlign: 'center', padding: '4rem', maxWidth: '800px', margin: 'auto' }}>
        <h1>The Human Channel</h1>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.6', fontWeight: 500 }}>
          Knowledge is no longer scarce. AI has made information instantly abundant. But human connection, trust, permission, and real interaction — those are now the rarest and most valuable assets.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          The Human Channel was created to explore this shift. As businesses, creators, and societies adapt to AI-powered abundance, we believe the next economy will be built around <strong>trusted human interaction</strong>.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          This is not a tech blog. This is not hype. This is about how humans will work with AI — not against it — to create businesses, relationships, and systems rooted in trust and dignity.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          We're still early. But the future is rushing at us. The Human Channel will document that future, one conversation at a time.
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '3rem', fontStyle: 'italic' }}>
          Welcome to the last channel humans will ever need.
        </p>
      </main>
    </Layout>
  );
}
