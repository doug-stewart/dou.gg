import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import douggDark from './themes/dougg-dark.json';

export default defineConfig({
    site: 'https://dou.gg',
    adapter: cloudflare({ imageService: 'cloudflare' }),
    output: 'server',
    integrations: [mdx(), sitemap(), react()],
    experimental: {
        responsiveImages: true,
        svg: true,
    },
    markdown: {
        shikiConfig: {
            theme: douggDark,
        },
    },
});
