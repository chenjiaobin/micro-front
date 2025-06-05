import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    react(),
    federation({
      name: 'main-app',
      remotes: {
        'ui-library': 'http://localhost:5001/assets/remoteEntry.js',
        'react-app': 'http://localhost:5002/assets/remoteEntry.js'
      },
      shared: ['vue', 'react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
