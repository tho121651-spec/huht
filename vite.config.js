import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Giữ đúng đường dẫn /student/... như hệ thống gốc
  base: '/student/',
  server: { port: 5173, open: '/student/News' }
})
