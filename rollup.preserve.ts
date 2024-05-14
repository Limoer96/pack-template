import { defineConfig, ModuleFormat } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const entries = ['src/index.ts']

const plugins = [
  resolve({
    preferBuiltins: true,
  }),
  json(),
  commonjs(),
  esbuild({
    target: 'es2015',
  }),
]

export default defineConfig([
  ...entries.map(input => ({
    input,
    output: [
      {
        format: 'esm' as ModuleFormat,
        preserveModules: true,
        dir: './es',
      },
      {
        format: 'cjs' as ModuleFormat,
        preserveModules: true,
        dir: './lib',
      },
    ],
    external: ['@fruits-chain/utils'],
    plugins,
  })),
  ...entries.map(input => ({
    input,
    output: [
      {
        format: 'esm' as ModuleFormat,
        preserveModules: true,
        dir: './es',
      },
      {
        format: 'esm' as ModuleFormat,
        preserveModules: true,
        dir: './lib',
      },
    ],
    external: [],
    plugins: [dts()],
  })),
])
