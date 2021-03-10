import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import rollup from './rollup.config.js';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';

export default Object.assign({}, rollup, {
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    serve({
      open: 'true',
      openPage: '/demo.html'
    }),
    livereload({
      watch: 'dist'
    })
  ],
})
