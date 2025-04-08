import { build } from 'tsup'
import ts from 'typescript'
import type { Compiler, WebpackOptionsNormalized } from 'webpack'

import { baseCompilerOptions, defaultTsupOptions } from './config'

let initialized = false

async function runNextTypegenDev() {
  await build({
    ...defaultTsupOptions,

    watch: true,
    entry: ['./src/server/app.ts'],
    outDir: './.typegen',
    dts: {
      only: true,
      resolve: true,
      compilerOptions: <ts.CompilerOptions>{
        ...baseCompilerOptions,

        baseUrl: process.cwd(),
      },
    },
    // silent: true,
  })
}

async function runBeforeWebpackCompile(mode: WebpackOptionsNormalized['mode']) {
  const isDev = mode === 'development'

  if (isDev && !initialized) {
    initialized = true
    await runNextTypegenDev()
  }
}

export class NextTypegenPlugin {
  apply(compiler: Compiler) {
    compiler.hooks.beforeCompile.tapPromise('NextTypegenPlugin', async () => {
      await runBeforeWebpackCompile(compiler.options.mode)
    })
  }
}
