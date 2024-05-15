import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    
  },
  esbuild: {
    loader: 'jsx',
    // Ensure JSX is processed
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    jsxInject: `import React from 'react'`
  }
})
