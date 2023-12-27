import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components/index.js',
      '@hooks': '/src/hooks/index.js',
      '@pages': '/src/pages/index.js',
      '@routers': '/src/routers/index.js',
      '@styles': '/src/scss/',
    },
  },
})
