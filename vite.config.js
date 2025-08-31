// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // dev server runs on http://localhost:3000
    open: true, // auto-open browser
  },
  build: {
    outDir: "dist", // build output folder
  },
  plugins:[
    tailwindcss()
  ]
});
