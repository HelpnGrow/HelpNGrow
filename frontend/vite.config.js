import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 build: {
    outDir: 'frontend/dist', // Make sure output is in "frontend/dist"
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your backend API URL
        changeOrigin: true,
        secure: false, // If you are using HTTPS with a self-signed cert
      },
    },
  },
})
