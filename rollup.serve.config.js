import rollup from './rollup.config.js';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import typescript from 'rollup-plugin-typescript2';

export default Object.assign({}, rollup, {
  plugins: [
    typescript({
      typescript: require('typescript'),
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
