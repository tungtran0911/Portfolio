import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Deployed on Vercel. Used for canonical URLs and the link-preview image; change it if the domain changes.
  site: 'https://portfolio-sigma-three-0m8n6ndkud.vercel.app',
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-default' },
      wrap: true,
    },
  },
});
