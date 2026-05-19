import { defineConfig } from 'vite-plus';
import { askrFoundationsShim, askrRootShim } from './vite.aliases';

export default defineConfig({
  test: {
    projects: [
      './vitest.test.unit.config.ts',
      './vitest.test.jsdom.config.ts',
      './vitest.test.browser.config.ts',
    ],
  },
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
  },
});

