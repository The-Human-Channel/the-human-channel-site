export default {
  tutorialSidebar: [{ type: 'doc', id: 'intro', label: 'Introduction' }]
};
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About',
      collapsed: false,
      items: [
        'about/mission',
        'about/vision',
        'about/values',
        'about/philosophy',
      ],
    },
    {
      type: 'category',
      label: 'Philosophy',
      collapsed: true,
      items: [
        'philosophy/consent-first-ai',
        'philosophy/human-in-the-loop',
        'philosophy/authentic-voice',
        'philosophy/trust-stack',
      ],
    },
    {
      type: 'category',
      label: 'Protocols',
      collapsed: true,
      items: [
        'protocols/spid-protocol-overview',
        'protocols/smart-packet-spec',
        'protocols/consent-layer-spec',
      ],
    },
    {
      type: 'category',
      label: 'Policy',
      collapsed: true,
      items: [
        'policy/regulator-packet',
        'policy/spid-compliance-stack',
        'policy/privacy-position',
      ],
    },
    {
      type: 'category',
      label: 'Thought Leadership',
      collapsed: true,
      items: [
        'thought-leadership/human-interaction-economy',
        'thought-leadership/ai-polarization',
        'thought-leadership/noise-economy',
      ],
    },
  ],
};
