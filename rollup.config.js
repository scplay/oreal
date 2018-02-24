import { version } from './package.json'

const banner = `/** @preserve ZeonWang ${version} Last Build: ${new Date().toUTCString()} */`;

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'oreal', 
      banner, 
      file: 'dist/index.umd.js',
      format: 'umd',
    },
    {
      banner, 
      file: 'dist/index.esm.js',
      format: 'es',
    }
  ]
};