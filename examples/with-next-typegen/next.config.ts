import type { NextConfig } from 'next'
import { withNextTypegen } from '@hono-next-utils/next-typegen'

const nextConfig: NextConfig = {
  /* config options here */
}

export default withNextTypegen(nextConfig)
