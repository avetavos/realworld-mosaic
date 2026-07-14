// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://projects.avetavos.com',
  base: '/mosaic',
  output: 'static',
  integrations: [starlight({
    title: 'Mosaic — Real-World Project',
    head: [
      { tag: 'script', attrs: { type: 'module', src: '/mosaic/mermaid-init.js' } },
      { tag: 'link', attrs: { rel: 'manifest', href: '/mosaic/manifest.webmanifest' } },
      { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/mosaic/apple-touch-icon.png' } },
      { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/mosaic/icon-192.png' } },
      { tag: 'meta', attrs: { name: 'theme-color', content: '#8B5CF6' } },
    ],
    defaultLocale: 'en',
    locales: {
      en: { label: 'English', lang: 'en' },
      th: { label: 'ไทย', lang: 'th' },
    },
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/realworld-mosaic' }],
    sidebar: [
      { label: 'Introduction', items: [{ autogenerate: { directory: 'introduction' } }] },
      { label: '1 · Setup & Tooling', items: [{ autogenerate: { directory: 'setup' } }] },
      { label: '2 · The Shell (Host)', items: [{ autogenerate: { directory: 'shell' } }] },
      { label: '3 · Module Federation Core', items: [{ autogenerate: { directory: 'federation' } }] },
      { label: '4 · Catalog Remote (React)', items: [{ autogenerate: { directory: 'catalog' } }] },
      { label: '5 · Web Components Interop', items: [{ autogenerate: { directory: 'web-components' } }] },
      { label: '6 · Cart Remote (Svelte)', items: [{ autogenerate: { directory: 'cart' } }] },
      { label: '7 · Content Remote (Astro)', items: [{ autogenerate: { directory: 'content' } }] },
      { label: '8 · Cross-MFE Communication', items: [{ autogenerate: { directory: 'communication' } }] },
      { label: '9 · Shared Auth & State', items: [{ autogenerate: { directory: 'auth-state' } }] },
      { label: '10 · Shared Design System', items: [{ autogenerate: { directory: 'design-system' } }] },
      { label: '11 · Routing Across MFEs', items: [{ autogenerate: { directory: 'routing' } }] },
      { label: '12 · Resilience & Performance', items: [{ autogenerate: { directory: 'resilience' } }] },
      { label: '13 · Independent Deployment', items: [{ autogenerate: { directory: 'deployment' } }] },
      { label: '14 · Wrap-up', items: [{ autogenerate: { directory: 'wrap-up' } }] },
    ],
  }), preact()],
});
