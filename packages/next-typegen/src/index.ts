import { resolve } from 'node:path'

import type { NextConfig } from 'next'
import type { Configuration } from 'webpack'

import { NextTypegenPlugin } from './plugin'
import type { NextTypegenOptions } from './types'

const defaultOptions: NextTypegenOptions = {
  entry: resolve(process.cwd(), './src/server-app.ts'),
  outDir: resolve(process.cwd(), './.typegen'),
  tsconfig: resolve(process.cwd(), './tsconfig.json'),
  silent: true,
}

/**
 * Creates a Next.js plugin that automatically generates TypeScript types for your application.
 *
 * @example
 * ```typescript
 * // next.config.js
 * import { createNextTypegen } from 'next-typegen'
 *
 * const withNextTypegen = createNextTypegen({
 *   entry: './src/server-app.ts',
 *   outDir: './.typegen',
 *   tsconfig: './tsconfig.json',
 *   silent: true
 * })
 *
 * export default withNextTypegen({
 *   // Your Next.js configuration
 * })
 * ```
 */
export function createNextTypegen(options: NextTypegenOptions) {
  return (nextConfig: NextConfig): NextConfig => {
    return {
      ...nextConfig,

      webpack(config: Configuration, context) {
        config.plugins!.push(new NextTypegenPlugin(options))

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, context)
        }

        return config
      },
    }
  }
}

/**
 * NextTypegen plugin with default configuration
 *
 * @example
 * ```typescript
 * // next.config.js
 * import { withNextTypegen } from 'next-typegen'
 *
 * export default withNextTypegen({
 *   // Your Next.js configuration
 * })
 * ```
 */
export const withNextTypegen = createNextTypegen(defaultOptions)
