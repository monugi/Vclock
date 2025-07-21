import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'VClock',
        short_name: 'VClock',
        description: 'Online Alarm Clock, Timer, Stopwatch, and World Clock',
        theme_color: '#0090DD',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/maskable-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp3,ttf,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          helmet: ['react-helmet-async'],
          icons: ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Mobile optimizations
    assetsInlineLimit: 4096, // Inline small assets
    cssCodeSplit: true,
    sourcemap: true,
  },
  server: {
    port: 5174,
  },
  css: {
    devSourcemap: false,
  },
  // Mobile performance optimizations
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
});
