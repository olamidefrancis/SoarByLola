import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // tailwind.config.js
theme: {
  extend: {
    colors: {
      soarRed: "#d62828",
      soarCream: "#f2e6c8",
      soarCharcoal: "#141414",
    },
    fontFamily: {
      soar: ["Playfair Display", "serif"], // logo-like feel
      body: ["Lato", "sans-serif"],
    }
  }
}

})
