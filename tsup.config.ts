import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['esm'],
    entry: ['src/index.ts'],
    treeshake: true,
    sourcemap: false,
    minify: false,
    clean: true,
    dts: true,
  },
]);
