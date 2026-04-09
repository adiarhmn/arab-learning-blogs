// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// LOCAL SITE
// const site = 'http://localhost:4323/';
const site = 'https://fuadrahman.vortala.my.id/';

// https://astro.build/config
export default defineConfig({
    site,
    vite: {
        plugins: [tailwindcss()],
    },
});
