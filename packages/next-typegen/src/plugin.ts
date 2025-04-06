import { build } from 'tsup'
import type ts from 'typescript'
import type { Compiler, WebpackOptionsNormalized } from 'webpack'

let initialized = false

async function runNextTypegenDev() {
  await build({
    watch: true,
    entry: ['./src/server/app.ts'],
    outDir: './.typegen',
    clean: false,
    bundle: false,
    dts: {
      only: true,
      compilerOptions: <ts.CompilerOptions>{
        noEmit: false,
        declaration: true,
        emitDeclarationOnly: true,
        checkJs: false,
        skipLibCheck: true,
        preserveSymlinks: false,
        noEmitOnError: undefined,
        incremental: true,
        tsBuildInfoFile: './node_modules/.typegen/tsconfig.tsbuildinfo',
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
