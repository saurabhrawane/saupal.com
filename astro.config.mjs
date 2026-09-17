// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://saupal.com',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Dual themes: CSS in global.css switches them with the site theme.
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
});
