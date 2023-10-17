import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: ['src/index.ts'],
    treeshake: false,
    sourcemap: true,
    minify: false,
    clean: true,
    dts: true,
    external: ['react'],
  },
]);
