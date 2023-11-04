import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { Mode, plugin as markdown } from 'vite-plugin-markdown';
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    react(),
    markdown({
      mode: [Mode.REACT]
    }),
    vike({ prerender: { noExtraDir: true } })
  ],
  build: {
    outDir: './docs',
    emptyOutDir: true
  }
}

export default config
