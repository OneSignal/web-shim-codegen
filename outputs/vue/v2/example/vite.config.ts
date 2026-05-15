import vue from '@vitejs/plugin-vue2';
import mkcert from 'vite-plugin-mkcert';

import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [vue(), mkcert()],
  server: {
    port: 3000,
    open: true,
  },
});
