import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'c8',
      all: true,
      exclude: ['**/dist/**', '**/interfaces/**', '**/*.d.ts', '**/*.config.ts', '**/main.tsx'],
    },
  },
})
