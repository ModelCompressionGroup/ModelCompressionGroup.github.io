import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '', // No subdirectory since this is a GitHub Pages user/organization site
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});

