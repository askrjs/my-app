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
    environment: 'jsdom',
    globals: true,
    include: ['tests/jsdom/**/*.test.tsx'],
    passWithNoTests: true,
  },
});