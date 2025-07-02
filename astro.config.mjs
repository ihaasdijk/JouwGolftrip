import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url";

// 🔧 Bepaal de root directory van je project
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname);

export default defineConfig({
  site: "https://foxi.netlify.app/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({ 
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react()
  ],
  vite: {
    server: {
      fs: {
        allow: [
          path.resolve('/Users/nlrit5010/jouwgolftrip'),
          path.resolve('/Users/nlrit5010/jouwgolftrip/node_modules'),
          path.resolve('./src')
        ]
      }
    }
  }
});
