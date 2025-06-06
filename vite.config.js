import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',    // Allow access from any device on the network
    port: 5173,         // Optional: use a specific port
    strictPort: true    // Optional: don't auto-switch if port is busy
  }
})
