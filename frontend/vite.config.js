import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
      '@ui-kit': '/src/ui-kit/index.js',
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
})
