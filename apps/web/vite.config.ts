import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), tsconfigPaths()],
	server: {
		host: '0.0.0.0',
		allowedHosts: ['web', 'localhost', '127.0.0.1'],
		port: 5173,
		strictPort: true,
	},
})
