import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const plugins = [
  resolve(),
  commonjs(),
];

export default {
  plugins,
  input: './boid.js',
  output: [
    // UMD Build
    {
      name: 'Boid',
      file: 'build.js',
      format: 'iife',
      interop: false,
    },
  ],

};