import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    // 确保public目录的文件被复制到dist目录
    copyPublicDir: true
  },
  server: {
    port: 5173,
    strictPort: true
  },
  // 确保public目录的文件在开发模式下可以访问
  publicDir: 'public'
})
