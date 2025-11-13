// @ts-check
import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    integrations: [
    astroIcon(),
    alpine(),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: false
  }
});