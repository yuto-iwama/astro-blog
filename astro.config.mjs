import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://fantastic-macaron-c73631.netlify.app/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
