import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    // Split vendor chunks so browser can cache them separately
    rollupOptions: {
      output: {
        manualChunks: {
          // Firebase in its own chunk (large library)
          firebase: ['firebase/app', 'firebase/auth'],
          // Redux in its own chunk
          redux: ['@reduxjs/toolkit', 'react-redux'],
          // React core
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Icons (react-icons is huge - isolate it)
          icons: ['react-icons'],
        },
      },
    },
    // Warn if any chunk exceeds 400kb
    chunkSizeWarningLimit: 400,
    // Minify with esbuild (default, very fast)
    minify: 'esbuild',
    // Enable source maps only in dev
    sourcemap: false,
  },
  // Optimize deps pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@reduxjs/toolkit', 'react-redux'],
  },
})
