import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Quiz', //  phải trùng tên repo

  plugins: [tailwindcss(),react()],
})
