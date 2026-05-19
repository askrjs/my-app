import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite-plus';
import { askr } from '@askrjs/vite';
import { askrFoundationsShim, askrRootShim } from './vite.aliases';

const workspaceRoot = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  plugins: [askr()],
  resolve: {
    alias: [
      {
        find: /^@askrjs\/askr$/,
        replacement: askrRootShim,
      },
      {
        find: /^@askrjs\/askr\/foundations$/,
        replacement: askrFoundationsShim,
      },
    ],
    preserveSymlinks: true,
  },
  optimizeDeps: {
    exclude: [
      '@askrjs/askr',
      '@askrjs/ui',
      '@askrjs/themes',
      '@askrjs/charts',
      '@askrjs/lucide',
    ],
  },
  lint: {
    ignorePatterns: ['dist/**', 'node_modules/**', 'coverage/**'],
    options: {
      typeAware: false,
      typeCheck: false,
    },
  },
  fmt: {
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    printWidth: 80,
    tabWidth: 2,
  },
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: [workspaceRoot],
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
