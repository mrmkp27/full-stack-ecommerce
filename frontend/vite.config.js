import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      external: ['react-router-dom'], // Remove react-toastify from external
    },
  },
  resolve: {
    alias: {
      'react-toastify': 'react-toastify',
    },
  },
  optimizeDeps: {
    include: ['react-toastify'],
  },
})