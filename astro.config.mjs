import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: { debug: true, forward: ["dataLayer.push"] },
    }),
    react(),
    tailwind(),
    astroImageTools,
  ],
});
