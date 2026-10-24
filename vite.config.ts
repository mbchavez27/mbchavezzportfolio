import { defineConfig, type Plugin } from 'vite'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'
import { parseLog } from './src/features/logs/domain/logs.domain'

const LOG_POSTS_DIR = path.resolve(import.meta.dirname, './src/features/logs/posts')

/** Fails the dev server and build when a log's header is missing or malformed, so broken posts never ship. */
function validateLogs(): Plugin {
  return {
    name: 'validate-logs',
    buildStart() {
      for (const file of readdirSync(LOG_POSTS_DIR)) {
        if (!file.endsWith('.md') || file.startsWith('_')) continue
        parseLog(file.replace(/\.md$/, ''), readFileSync(path.join(LOG_POSTS_DIR, file), 'utf8'))
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cloudflare(),
    validateLogs(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
