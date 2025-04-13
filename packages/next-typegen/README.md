# Next-Typegen

Next-Typegen is a Next.js plugin that automatically generates TypeScript type definitions for Hono applications. It integrates seamlessly with your Next.js project to provide end-to-end type safety between your Hono API routes and frontend code without manual type creation.

This library is expected to help solve known issues with Hono RPC, particularly the IDE performance problems described in the [Hono documentation](https://hono.dev/docs/guides/rpc#ide-performance).

## Inspiration

This project was inspired by:

- [yusukebe/my-app-typegen](https://github.com/yusukebe/my-app-typegen)

## Features

- Automatically generates TypeScript types for Hono API routes
- Watches for changes in your Hono app and regenerates types in real-time
- Seamless integration with Next.js webpack configuration

## Installation

```bash
npm install -D next-typegen
# or
yarn add -D next-typegen
# or
pnpm add -D next-typegen
```

## Requirements

For proper type generation, please ensure:

1. **Entry File Location**: The entry file should be at the same level as the `app/` folder in your project structure for smooth type generation.

```text
  src/
  ├── app/
  ├── server-app.ts
  ...
```

2. **BaseUrl in tsconfig.json**: When using absolute paths in your imports, you must specify the correct `baseUrl` in your `tsconfig.json` file to properly resolve types. Otherwise, the generated types might not correctly reference your imports.

   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
       // other options...
     }
   }
   ```

## Usage

### Basic Usage

Add the plugin to your `next.config.js` or `next.config.ts` file:

```typescript
// next.config.js or next.config.ts
import { withNextTypegen } from 'next-typegen'

export default withNextTypegen({
  // Your Next.js configuration
})
```

Then, create your Hono app in the entry file (default: `src/server-app.ts`):

```typescript
// src/server-app.ts
import { Hono } from 'hono'

// Create your Hono app with typed routes
const app = new Hono()
  .get('/api/hello', (c) => {
    return c.json({
      message: 'Hello from Hono!',
    })
  })
  .get('/api/users/:id', (c) => {
    const id = c.req.param('id')
    return c.json({ id, name: `User ${id}` })
  })

// Export for Next-Typegen to analyze
export type App = typeof app
```

### Custom Configuration

You can customize the plugin behavior:

```typescript
// next.config.js or next.config.ts
import { createNextTypegen } from 'next-typegen'

const withNextTypegen = createNextTypegen({
  entry: './src/server-app.ts', // Your hono app entry point
  outDir: './.typegen', // Where to store generated types
  tsconfig: './tsconfig.json', // Path to your next.js tsconfig
  silent: false, // Enable logging
})

export default withNextTypegen({
  // Your next.js configuration
})
```

## How It Works

Next-Typegen uses webpack hooks to integrate with the Next.js build process:

1. It registers a webpack plugin that runs before compilation
2. In development mode, it watches your Hono app entry file and its dependencies
3. When changes are detected, it uses `tsup` to generate type definitions for your Hono routes and handlers
4. Generated types include complete route patterns, parameter types, and response types from your Hono app
5. These types can be imported in your frontend code for end-to-end type safety

The plugin only runs the type generation process in development mode to avoid unnecessary processing during production builds.

## Solving Hono RPC Performance Issues

One of the major challenges when using Hono RPC is the degradation of IDE performance as your application grows. As [noted in the Hono documentation](https://hono.dev/docs/guides/rpc#ide-performance), when your app has many routes, type instantiation can significantly slow down your IDE.

Next-Typegen solves these issues by:

1. **Pre-generating Types**: Instead of letting your IDE calculate complex type instantiations in real-time, Next-Typegen pre-generates all necessary types during the development process.

2. **Reducing Type Calculation Overhead**: Your IDE doesn't need to recalculate massive amounts of type instantiations every time you use your Hono app.

3. **Separating Type Generation from Development**: Type generation happens in a separate process, so it doesn't impact your coding experience.

4. **Avoiding Version Mismatch Problems**: Since the types are generated from your actual codebase, you won't face issues with Hono version mismatches between backend and frontend.

5. **Simplifying TypeScript Project References**: You can import the generated types directly without complex TypeScript project reference configurations.

This approach addresses the recommendations in the Hono documentation to "compile your code before using it".

## Example Project

Check out the [example project](https://github.com/wooseongDev/hono-next-utils/tree/main/examples/with-next-typegen) for a complete working example that demonstrates how to set up and use Next-Typegen in a real project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
