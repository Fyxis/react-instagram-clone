import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server:{
    cors: {
      origin: '3d77-180-246-78-60.ngrok-free.app',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type']
    },
    allowedHosts: ['3d77-180-246-78-60.ngrok-free.app'],
  },
  build: {
    sourcemap: false,
    minify: `esbuild`
  }
})
