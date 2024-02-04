import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://fantastic-macaron-c73631.netlify.app/",
  integrations: [preact()]
});