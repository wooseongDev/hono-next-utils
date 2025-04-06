import type { NextConfig } from 'next'
import type { Configuration } from 'webpack'

import { NextTypegenPlugin } from './plugin'

export function createNextTypegen() {
  return (nextConfig: NextConfig): NextConfig => {
    return {
      ...nextConfig,

      webpack(config: Configuration, context) {
        config.plugins!.push(new NextTypegenPlugin())

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, context)
        }

        return config
      },
    }
  }
}

export const withNextTypegen = createNextTypegen()
