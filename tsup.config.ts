import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: ['src/index.ts'],
    sourcemap: true,
    minify: false,
    clean: true,
    dts: true,
  },
]);
