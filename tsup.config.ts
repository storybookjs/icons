import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: ['src/icons/*.tsx'],
    treeshake: true,
    sourcemap: true,
    minify: false,
    clean: true,
    dts: true,
    external: ['react'],
  },
]);
