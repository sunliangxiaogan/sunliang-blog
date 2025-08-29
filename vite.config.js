import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sunliang-blog/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})