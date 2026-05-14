import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: [
      "build",
      "src/static/*",
      "src/snippets/*",
      "src/scaffolds/*",
      "ts-to-es6",
      "outputs",
    ],
  },
  lint: {
    ignorePatterns: [
      "build",
      "src/static/*",
      "src/snippets/*",
      "src/scaffolds/*",
      "ts-to-es6",
      "outputs",
    ],
    options: { typeAware: true, typeCheck: true },
  },
});
