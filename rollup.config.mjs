/* eslint-disable import/no-extraneous-dependencies */
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import common from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default [{
  input: 'ssg/index.tsx',
  output: {
    dir: 'ssg/lib',
    exports: 'auto',
    format: 'cjs',
  },
  external: [
    'solid-js',
    'solid-js/web',
  ],
  plugins: [
    nodeResolve({
      preferBuiltins: true,
      exportConditions: ['solid', 'node'],
    }),
    typescript(),
    postcss({
      config: { path: './postcss.config.js' },
      extensions: ['.css'],
      minimize: true,
      inject: { insertAt: 'top' },
    }),
    common(),
    babel({
      babelHelpers: 'bundled',
      presets: [['solid', { generate: 'ssr', hydratable: true }]],
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    })],
},
{
  input: 'solid-components/index.tsx',
  output: [
    {
      dir: 'ssg/public/js',
      format: 'esm',
    },
  ],
  preserveEntrySignatures: false,
  plugins: [
    typescript(),
    nodeResolve({ exportConditions: ['solid'] }),
    postcss({
      config: { path: './postcss.config.js' },
      extensions: ['.css'],
      minimize: true,
      inject: { insertAt: 'top' },
    }),
    common(),
    babel({
      babelHelpers: 'bundled',
      presets: [['solid', { generate: 'dom', hydratable: true }]],
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),
  ],
},
];
