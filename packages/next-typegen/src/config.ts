import type { Options as TsupOptions } from 'tsup'
import type ts from 'typescript'

export const defaultTsupOptions: TsupOptions = {
  clean: false,
  bundle: false,
  treeshake: false,
  splitting: false,
  minify: false,
}

export const baseCompilerOptions: ts.CompilerOptions = {
  incremental: true,
  tsBuildInfoFile: './node_modules/.next-typegen/tsconfig.tsbuildinfo',
}
