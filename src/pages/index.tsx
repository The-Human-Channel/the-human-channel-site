import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="The Human Channel"
      description="Restoring trust, permission, and human interaction in the AI era.">
      <main style={{ textAlign: 'center', padding: '4rem', maxWidth: '800px', margin: 'auto' }}>
        <h1>The Human Channel</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
          We created The Human Channel because something massive is changing: <b>knowledge itself is no longer scarce.</b> 
          AI can generate, summarize, and synthesize information instantly. What’s scarce now is <b>human interaction</b>, trust, and permission.
        </p>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
          In this new economy, businesses will shift from selling information to delivering meaningful human connection — conversations, guidance, trust-building, empathy, creativity — the things that AI alone cannot replicate at scale.
        </p>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
          The Human Channel exists to document, debate, and explore this shift as it unfolds. We’ll cover not just the technology — but also the ethics, business models, social contracts, and the responsibility we all carry as humans working alongside AI.
        </p>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
          We're early. But we're building something we believe matters: <b>how humans and AI will coexist in a way that preserves dignity, permission, and human agency.</b>
        </p>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
          The Human Channel is not here to sell hype. It’s here to help navigate the real frontier that’s emerging.
        </p>
      </main>
    </Layout>
  );
}


