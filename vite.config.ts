import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    singleQuote: true,
    sortImports: {
      enabled: true,
    },
    ignorePatterns: [
      'build',
      'src/static/*',
      'src/snippets/*',
      'src/scaffolds/*',
      'ts-to-es6',
      'outputs',
    ],
  },
  lint: {
    ignorePatterns: [
      'build',
      'src/static/*',
      'src/snippets/*',
      'src/scaffolds/*',
      'ts-to-es6',
      'outputs',
    ],
    options: { typeAware: true, typeCheck: true },
  },
});
