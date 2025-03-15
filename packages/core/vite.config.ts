import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "@providers": "/src/providers",
      "@components": "/src/components",
      "@interfaces": "/src/interfaces",
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "react-formulate-ui",
      formats: ["es", "cjs"], // Supports ESM and CJS
      fileName: (format) => `react-formulate-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
