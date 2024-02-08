import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://fantastic-macaron-c73631.netlify.app/",
  integrations: [tailwind()],
});
