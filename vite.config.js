import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react"


export default defineConfig({
    plugins: [
        tailwindcss(),
        react()
    ],
    server: {
        host: true,
        port: 8000
    }
})