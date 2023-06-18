import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      sourcemapPathTransform: (relativeSourcePath) => {
        return relativeSourcePath
          .replace('../../node_modules/', '../')
          .replace('../packages/react-ui', '..')
      },
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
      sourcemapPathTransform: (relativeSourcePath) => {
        return relativeSourcePath
          .replace('../../node_modules/', '../')
          .replace('../packages/react-ui', '..')
      },
    },
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      exclude: ['**/__tests__/**'],
      tsconfig: './tsconfig.json',
    }),
    commonjs({
      include: ['../../node_modules/**'],
    }),
  ],
}
