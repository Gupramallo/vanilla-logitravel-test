import { defineConfig } from 'vite'

export default defineConfig({
  // Set the root to current directory (where index.html is)
  root: '.',
  
  // Configure the development server
  server: {
    port: 3000,
    open: true, // Auto-open browser
    host: true, // Allow external connections
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  
  // Configure how static assets are served
  publicDir: 'public',
  
  // Base path for the app
  base: './'
})
