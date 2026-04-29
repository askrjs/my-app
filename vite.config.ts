import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite-plus';
import { askr } from '@askrjs/vite';

const askrUiSrc = fileURLToPath(new URL('../askr-ui/src', import.meta.url));
const askrThemesSrc = fileURLToPath(
  new URL('../askr-themes/src', import.meta.url)
);
const askrChartsSrc = fileURLToPath(
  new URL('../askr-charts/src', import.meta.url)
);
const workspaceRoot = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  plugins: [askr()],
  resolve: {
    alias: [
      {
        find: '@askrjs/ui/foundations',
        replacement: resolve(askrUiSrc, 'foundations/index.ts'),
      },
      {
        find: '@askrjs/ui/primitives',
        replacement: resolve(askrUiSrc, 'components/primitives'),
      },
      {
        find: '@askrjs/ui/composites',
        replacement: resolve(askrUiSrc, 'components/composites'),
      },
      {
        find: /^@askrjs\/askr-ui$/,
        replacement: resolve(askrUiSrc, 'index.ts'),
      },
      {
        find: '@askrjs/themes/components',
        replacement: resolve(askrThemesSrc, 'components/index.ts'),
      },
      {
        find: /^@askrjs\/askr-themes\/default$/,
        replacement: resolve(askrThemesSrc, 'themes/default/index.css'),
      },
      {
        find: '@askrjs/charts/components',
        replacement: resolve(askrChartsSrc, 'components/index.ts'),
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

