import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { Mode, plugin as markdown } from 'vite-plugin-markdown';
import compileTime from "@wahyubucil/vite-plugin-compile-time"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    compileTime(),
    react(),
    markdown({
      mode: [Mode.REACT]
    }),
  ],
  build: {
    outDir: './docs',
    emptyOutDir: true
  }
})
