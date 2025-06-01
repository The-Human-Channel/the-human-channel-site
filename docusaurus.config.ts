import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isProd = process.env.NODE_ENV === 'production';

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
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image: 'img/thc-social-card.png',
    navbar: {
      title: 'The Human Channel',
      logo: {
        alt: 'The Human Channel Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/docs/intro', label: 'Whitepapers', position: 'left' },
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
        { title: 'Docs', items: [{ label: 'Whitepapers', to: '/docs/intro' }] },
        { title: 'More', items: [{ label: 'Blog', to: '/blog' }] }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Human Channel.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
