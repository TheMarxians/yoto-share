import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  // Change base in dev or prod
  base: process.env.NODE_ENV === 'production' ? '/yoto-share/' : '/',
  build: {
    assetsInlineLimit: 0, // Ensure proper MIME types
    outDir: 'dist',
    sourcemap: true,
    cssCodeSplit: true,
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@shadcn-ui': path.resolve(__dirname, 'node_modules/shadcn-ui/src'),
      '@geonative/ui': path.resolve(__dirname, 'node_modules/shadcn-ui/src'),
    },
  },
});
