import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
  integrations: [react(), tailwind(), astroImageTools],
  output: "server",
  adapter: vercel()
});