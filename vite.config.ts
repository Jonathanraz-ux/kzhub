import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: __dirname,
  server: {
    fs: {
      strict: true,
      allow: [path.resolve(__dirname)],
    },
    watch: {
      ignored: [
        '**/AppData/**',
        '**/Antigravity IDE/**',
        '**/node_modules/**',
        '**/.git/**',
      ],
    },
  },
});
