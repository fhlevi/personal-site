import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteImagemin from 'vite-plugin-imagemin';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    compression(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.9] },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
  ],
})
