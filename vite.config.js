import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
	define: {'process.env':process.env,},
  plugins: [react()],
	base: './',
	optimizeDeps: {
		include: ['moment', 'moment/locale/ko']
		},
})
