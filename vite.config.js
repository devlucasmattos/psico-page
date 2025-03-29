import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/psico-page/',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
})