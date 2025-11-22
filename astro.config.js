import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import douggDark from './themes/dougg-dark.json';

// https://github.com/withastro/astro/issues/12824
const alias = import.meta.env.PROD
    ? {
          'react-dom/server': 'react-dom/server.edge',
      }
    : undefined;

export default defineConfig({
    site: 'https://dou.gg',
    adapter: cloudflare({
        imageService: 'cloudflare',
        runtime: {
            mode: 'local',
            type: 'pages',
        },
    }),
    output: 'server',
    integrations: [mdx(), sitemap(), react()],
    responsiveImages: true,
    svg: true,
    markdown: { shikiConfig: { theme: douggDark } },
    vite: {
        resolve: { alias },
        ssr: {
            alias,
            external: ['node:fs/promises', 'node:path', 'node:url', 'node:crypto'],
        },
    },
});
