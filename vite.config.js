import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const hasSrc = fs.existsSync(path.resolve(__dirname, 'src'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Gracefully handles both /src/main.jsx and flat root main.jsx on Vercel
      '/src': hasSrc ? path.resolve(__dirname, 'src') : path.resolve(__dirname, '.'),
      '@': hasSrc ? path.resolve(__dirname, 'src') : path.resolve(__dirname, '.')
    }
  },
  server: {
    port: 5173,
    host: true,
    open: false
  }
})
