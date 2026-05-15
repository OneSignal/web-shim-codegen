import vue from '@vitejs/plugin-vue2';

import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
  },
});
