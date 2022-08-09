import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ['defaults', 'not ie 11']
    })
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/assets/styles')
    }
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        nested: path.resolve(__dirname, 'nested/index.html')
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
