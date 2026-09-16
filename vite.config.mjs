import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// 多页面入口：Vite 默认只把 index.html 当入口，
// 这里显式声明两个页面，text-lab.html 才会被构建进 dist/。
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        lab: fileURLToPath(new URL('./text-lab.html', import.meta.url)),
      },
    },
  },
})
