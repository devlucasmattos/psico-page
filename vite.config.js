import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Isso é essencial para domínios personalizados
  build: {
    outDir: 'docs'  // Vamos usar a pasta docs para facilitar
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
})