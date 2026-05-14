import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: { ignorePatterns: ["outputs/**", "build/**", "dist/**", "ts-to-es6/**"] },
  lint: {
    ignorePatterns: ["outputs/**", "build/**", "dist/**", "ts-to-es6/**"],
    options: { typeAware: true, typeCheck: true },
  },
});
