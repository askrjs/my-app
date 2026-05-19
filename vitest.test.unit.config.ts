import { askr } from '@askrjs/vite';
import { defineConfig } from 'vite-plus';
import { askrFoundationsShim, askrRootShim } from './vite.aliases';

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
  oxc: {
    jsx: {
      runtime: 'automatic',
      importSource: '@askrjs/askr',
    },
  },
  test: {
    globals: true,
    include: ['tests/unit/**/*.test.ts', 'tests/unit/**/*.test.tsx'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});