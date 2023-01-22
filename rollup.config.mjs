import path from 'path'
import glob from 'glob';
import { fileURLToPath } from 'url';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
	input: Object.fromEntries(
    glob.sync('solid-components/**/*.tsx').map((file) => [
      // This remove `solid-components/` as well as the file extension from each
			// file, so e.g. solid-components/nested/foo.tsx becomes nested/foo
			path.relative(
				'solid-components',
				file.slice(0, file.length - path.extname(file).length)
      ),
			// This expands the relative paths to absolute paths, so e.g.
			// solid-components/nested/foo becomes /project/solid-components/nested/foo.tsx
			fileURLToPath(new URL(file, import.meta.url)) 
    ])
  ),
  output: {
    format: 'es',
      dir: 'blocks/',
  },
  external: [
    "solid-js",
    "solid-js/web",
  ],
  plugins: [
    typescript(),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.ts', '.tsx'],
      presets: ['solid']
    })],
};