import { defineConfig, type Plugin } from 'vite'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
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

// Noon UTC today, so the date reads as the same calendar day in (almost) every timezone; see src/lib/now.ts.
/**
 * Makes `vite preview` serve the build like Cloudflare Pages and nginx do: /projects gets the
 * prerendered dist/projects.html, and unknown pages get the plain 404.html shell instead of the
 * home page's markup.
 */
function servePrerenderedPages(): Plugin {
  return {
    name: 'serve-prerendered-pages',
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, _res, next) => {
        const pathname = req.url?.split('?')[0] ?? '/'
        const accepts = req.headers.accept ?? ''
        if (path.extname(pathname) || !accepts.includes('text/html')) return next()
        const page = pathname === '/' ? '/index.html' : `${pathname.replace(/\/$/, '')}.html`
        const query = req.url?.slice(pathname.length) ?? ''
        req.url = (existsSync(path.join(outDir, page)) ? page : '/404.html') + query
        next()
      })
    },
  }
}

const BUILD_DATE = process.env.BUILD_DATE ?? `${new Date().toISOString().slice(0, 10)}T12:00:00Z`

export default defineConfig({
  define: {
    "import.meta.env.BUILD_DATE": JSON.stringify(BUILD_DATE),
  },
  plugins: [
    react(),
    tailwindcss(),
    validateLogs(),
    servePrerenderedPages(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
