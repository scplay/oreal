import { version } from './package.json'

export default {
  input: 'src/index.js',
  output: {
    name: 'oreal', 
    banner: `/** @preserve ZeonWang ${version} Last Build: ${new Date().toUTCString()} */`, 
    file: 'dist/index.js',
    format: 'umd',
  }
};