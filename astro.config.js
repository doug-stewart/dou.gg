/* eslint-disable import/named, import/no-unresolved */
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://dou.gg',
    adapter: cloudflare(),
    output: 'server',
});
