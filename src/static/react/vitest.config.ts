import { defineConfig } from "vite-plus";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
});
