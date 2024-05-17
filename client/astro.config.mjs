import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import devtoolBreakpoints from "astro-devtool-breakpoints";
import react from "@astrojs/react";

import node from "@astrojs/node";

export default defineConfig({
  server: { 
    port: 5173 
  },
 vite: {
  server: {
    proxy: {
      '/search': { //How can i make it so that the 'target' for all of our endpoints is port 5001?
        target: 'http://localhost:5001',
        changeOrigin: true
      },
    }
  }
 },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://lexingtonthemes.com',
  integrations: [tailwind(), sitemap(), mdx(), devtoolBreakpoints(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});