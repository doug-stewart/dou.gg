/* eslint-disable import/named, import/no-unresolved */
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://dou.gg',
    adapter: cloudflare(),
    output: 'server',
    integrations: [mdx(), sitemap()],
    experimental: {
        responsiveImages: true,
        svg: true,
    },
});
