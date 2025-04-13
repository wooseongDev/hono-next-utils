import type { NextConfig } from 'next'
import { createNextTypegen } from '@hono-next-utils/next-typegen'
import { resolve } from 'node:path'

const nextConfig: NextConfig = {
  /* config options here */
}

const withNextTypegen = createNextTypegen({
  entry: resolve(__dirname, './src/server-app.ts'),
  outDir: resolve(__dirname, './.typegen'),
  tsconfig: resolve(__dirname, './tsconfig.json'),
  silent: false,
})

export default withNextTypegen(nextConfig)
