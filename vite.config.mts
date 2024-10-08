import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/litegraph.js'),
      name: 'litegraph.js',
      fileName: (format) => `litegraph.${format}.js`,
      formats: ['es', 'umd']
    },
    minify: false,
    sourcemap: true,
  },
  plugins: [
    dts({
      entryRoot: 'src',
      insertTypesEntry: true,
      include: ['src/**/*.ts'],
      outDir: 'dist',
    }),
  ],
})