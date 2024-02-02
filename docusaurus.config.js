// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UKCore SDK for FHIR',
  tagline: 'Helping developers write great code for healthcare',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'FHIR UKCore Development Kit',
        logo: {
          alt: 'ClaroTech Logo',
          src: 'img/clarotech-icon_36_36.png',
        },
        items: [
          {
            href: '/docs/resources/included-resources',
            activeBasePath: 'docs',
            type: 'docSidebar',
            sidebarId: 'sdkSidebar',
            position: 'right',
            label: 'Resources',
          },
          {
            href: '/docs/extensions/overview',
            activeBasePath: 'docs',
            type: 'docSidebar',
            sidebarId: 'sdkSidebar',
            position: 'right',
            label: 'Extensions',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sdkSidebar',
            position: 'right',
            label: 'Versions',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sdkSidebar',
            position: 'right',
            label: 'Feedback',
          },
          {
            href: 'https://eightshift.com/',
            label: 'EightShift',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        logo: {
          alt: 'ClaroTech Logo',
          src: 'img/clarotech-icon_36_36.png',
        },
      },
      prism: {
        theme: prismThemes.oneDark,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["csharp"]
      },
    }),
};

export default config;
