# Next.js with Next-Typegen Example

This example demonstrates how to use the `next-typegen` library with a Next.js project to automatically generate TypeScript type definitions.

## Features Demonstrated

- Setting up Next-Typegen in a Next.js project
- Custom configuration of the plugin
- Generated TypeScript definition files in the `.typegen` directory

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

Open [http://localhost:3000/api/example](http://localhost:3000/api/example) with your browser to see the result.

## How Next-Typegen is Configured

This example project uses a custom configuration for Next-Typegen. Check out the `next.config.ts` file:

```typescript
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
```

## Generated Types

When you run the development server, Next-Typegen will automatically generate type definitions in the `.typegen` directory. These types are derived from your application code and can be imported in your TypeScript files.
