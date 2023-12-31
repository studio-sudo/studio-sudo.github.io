import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import compileTime from "@wahyubucil/vite-plugin-compile-time"
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    react(),
    compileTime(),
    vike({ prerender: { noExtraDir: true } })
  ],
  build: {
    outDir: './docs',
    emptyOutDir: true
  }
}

export default config
