import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const plugins = [
  resolve(),
  commonjs(),
];

export default {
  plugins,
  input: './flock.js',
  output: [
    // UMD Build
    {
      name: 'Boids',
      file: 'build.js',
      format: 'iife',
      interop: false,
    },
  ],

};