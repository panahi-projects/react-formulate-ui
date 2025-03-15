import { defineConfig } from "vite";
import { join } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@core": join(__dirname, "packages/core/src"),
    },
  },
  plugins: [],
});
