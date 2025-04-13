import { Hono } from 'hono'
import { v1Route, v2Route } from '@/server/routes'
import { response } from '@/server/response'

export const app = new Hono()
  .basePath('/api')
  .get('/example', (c) => c.json(response()))
  .route('/v1', v1Route)
  .route('/v2', v2Route)

export type App = typeof app
