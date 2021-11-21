import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss({
    presets: [
        presetUno()
    ]
  })]
})
