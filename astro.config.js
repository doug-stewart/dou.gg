/* eslint-disable import/named, import/no-unresolved */
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://dou.gg',
    adapter: cloudflare(),
    output: 'server',
    integrations: [icon(), mdx()],
    experimental: {
        responsiveImages: true,
        svg: true,
    },
});
