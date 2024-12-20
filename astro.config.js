import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://dou.gg',
    adapter: cloudflare(),
    output: 'server',
    integrations: [mdx(), sitemap(), react()],
    experimental: {
        responsiveImages: true,
        svg: true,
    },
});
