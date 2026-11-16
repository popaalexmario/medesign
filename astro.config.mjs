import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import trailingSlash from './integrations/trailing-slash.mjs';

// Data ultimei modificări pentru articole (updatedDate sau pubDate), pusă în
// sitemap ca <lastmod>, ca Google și Bing să știe ce s-a schimbat.
const blogDates = Object.fromEntries(
  readdirSync('./src/content/blog')
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const fm = readFileSync(`./src/content/blog/${f}`, 'utf8').split('---')[1] ?? '';
      const date = (fm.match(/^updatedDate:\s*(\S+)/m) ?? fm.match(/^pubDate:\s*(\S+)/m))?.[1];
      return [f.replace(/\.md$/, ''), date];
    })
);

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/proba'),
      serialize(item) {
        const m = item.url.match(/\/blog\/([^/]+)\/$/);
        if (m && blogDates[m[1]]) item.lastmod = new Date(blogDates[m[1]]).toISOString();
        return item;
      },
    }),
    trailingSlash(),
  ],
  site: 'https://me-design.ro',
});
