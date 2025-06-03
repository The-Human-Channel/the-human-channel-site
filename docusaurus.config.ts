import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type { ThemeConfig } from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The Human Channel',
  tagline: 'Restoring trust, permission, and human interaction in the AI era.',
  url: 'https://the-human-channel.github.io',
  baseUrl: '/the-human-channel-site/',
  favicon: 'img/favicon.ico',
  organizationName: 'the-human-channel',
  projectName: 'the-human-channel-site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
  path: 'docs',
  routeBasePath: '/',
  sidebarPath: require.resolve('./sidebars.ts'),
    },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/og-main.png',
    navbar: {
      title: 'The Human Channel',
      logo: {
        alt: 'The Human Channel Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/the-human-channel/the-human-channel-site',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Documents', to: '/' }] },
        { title: 'More', items: [{ label: 'Blog', to: '/blog' }] }
      ],
      copyright: 'Copyright © 2025 The Human Channel.'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies ThemeConfig
};

export default config;
