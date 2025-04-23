import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  base: '/',
});
