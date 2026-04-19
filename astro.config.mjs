import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';

// Open external links and downloadable files (PDFs, docs, zips, etc.)
// in a new tab. Runs over the HAST after markdown is parsed.
function rehypeOpenInNewTab() {
  const downloadable = /\.(pdf|docx?|xlsx?|pptx?|zip)(\?|#|$)/i;
  const external = /^https?:\/\//i;
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a') return;
      const href = node.properties?.href;
      if (typeof href !== 'string') return;
      if (!external.test(href) && !downloadable.test(href)) return;
      node.properties.target = '_blank';
      node.properties.rel = ['noopener', 'noreferrer'];
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://ejclarkin.com',
  output: 'static',
  integrations: [
    sitemap()
  ],
  markdown: {
    rehypePlugins: [rehypeOpenInNewTab],
  },
});
