import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import devtoolBreakpoints from 'astro-devtool-breakpoints';
import react from '@astrojs/react';
import icon from "astro-icon";

export default defineConfig({
  server: {
    port: 5173
  },
  vite: {
    server: {
      proxy: process.env.NODE_ENV === 'development' ? {
        '/search': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/summarize': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/deleteUser': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/getBlueSkyFeed': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/supabaseLogIn': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/getUserArticles': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/getUserResearch': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/articleOperation': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/saveResearch': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/signUserOut': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/resetUserPassword': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/getCurrentUser': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/createNewUser': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/sendFeedback': {
          target: 'http://localhost:5001',
          changeOrigin: true
        }
      } : undefined
    }
  },
  markdown: { /* ... */ },
  site: 'https://elenchusapp.io/',
  integrations: [tailwind(), sitemap(), mdx(), devtoolBreakpoints(), react(), icon()],
  output: 'static',
});
