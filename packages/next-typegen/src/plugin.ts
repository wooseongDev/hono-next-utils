import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

import { build } from 'tsup'
import ts from 'typescript'
import type { Compiler, WebpackOptionsNormalized } from 'webpack'

import { NextTypegenOptions } from './types'

let initialized = false

async function runNextTypegenDev(options: NextTypegenOptions) {
  const tsconfigPath = options.tsconfig ?? resolve(process.cwd(), './tsconfig.json')

  const { config } = ts.readConfigFile(tsconfigPath, (path) => readFileSync(path, 'utf-8'))
  const parsedConfig = ts.parseJsonConfigFileContent(config, ts.sys, dirname(tsconfigPath))

  await build({
    watch: true,
    silent: Boolean(options.silent ?? true),

    entry: [options.entry],
    outDir: options.outDir,
    tsconfig: tsconfigPath,
    dts: {
      only: true,
      resolve: true,
      compilerOptions: <ts.CompilerOptions>{
        baseUrl: parsedConfig.options.baseUrl,
        paths: parsedConfig.options.paths,

        incremental: true,
        tsBuildInfoFile: resolve(options.outDir, './tsconfig.tsbuildinfo'),
      },
    },
  })
}

async function runBeforeWebpackCompile(mode: WebpackOptionsNormalized['mode'], options: NextTypegenOptions) {
  const isDev = mode === 'development'

  if (isDev && !initialized) {
    initialized = true
    await runNextTypegenDev(options)
  }
}

export class NextTypegenPlugin {
  private readonly options: NextTypegenOptions

  constructor(options: NextTypegenOptions) {
    this.options = options
  }

  apply(compiler: Compiler) {
    compiler.hooks.beforeCompile.tapPromise('NextTypegenPlugin', async () => {
      await runBeforeWebpackCompile(compiler.options.mode, this.options)
    })
  }
}
