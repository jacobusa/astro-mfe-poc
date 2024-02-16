import { defineConfig } from "vite";
import cssInject from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

export default defineConfig(() => ({
  plugins: [cssInject()],
  server: {
    port: 7100,
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/main.jsx"),
      preserveEntrySignatures: "exports-only",
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
}));
