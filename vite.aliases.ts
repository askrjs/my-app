import { fileURLToPath } from 'node:url';

export const askrRootShim = fileURLToPath(
  new URL('./src/shims/askr-root.ts', import.meta.url)
);

export const askrFoundationsShim = fileURLToPath(
  new URL('./src/shims/askr-foundations.ts', import.meta.url)
);