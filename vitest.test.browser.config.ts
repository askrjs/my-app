import { askr } from '@askrjs/vite';
import { playwright } from 'vite-plus/test/browser-playwright';
import { defineConfig } from 'vite-plus';
import { askrFoundationsShim, askrRootShim } from './vite.aliases';

function seedBrowserPort() {
  return {
    name: 'seed-browser-port',
    enforce: 'pre',
    configureVitest(context: {
      vitest: { state: { _data: { browserLastPort: number } } };
    }) {
      context.vitest.state._data.browserLastPort = 0;
    },
  };
}

export default defineConfig({
  plugins: [seedBrowserPort(), askr()],
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
    jsxInject: "import { jsx, jsxs, Fragment } from '@askrjs/askr/jsx-runtime';",
  },
  test: {
    api: {
      host: '127.0.0.1',
    },
    browser: {
      api: {
        host: '127.0.0.1',
        port: 0,
      },
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
    globals: true,
    include: ['tests/browser/**/*.browser.test.tsx'],
    passWithNoTests: true,
  },
});