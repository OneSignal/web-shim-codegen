import vue from '@vitejs/plugin-vue2';
import mkcert from 'vite-plugin-mkcert';

import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [vue(), mkcert()],
  server: {
    https: true, // Not needed for Vite 5+ (simply omit this option)
    port: 3000,
    open: true,
  },
});
