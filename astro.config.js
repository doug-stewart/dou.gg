/* eslint-disable import/named, import/no-unresolved */
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://dou.gg',
    adapter: cloudflare({
        imageService: 'cloudflare',
    }),
    output: 'server',
    integrations: [icon()],
    experimental: {
        responsiveImages: true,
        svg: true,
    },
});
