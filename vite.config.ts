import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        earlyBird: fileURLToPath(new URL('./projects/early-bird/index.html', import.meta.url)),
        smartzle: fileURLToPath(new URL('./projects/smartzle/index.html', import.meta.url)),
      },
    },
  },
})
