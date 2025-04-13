import { app } from '@/server-app'
import { handle } from 'hono/vercel'

export const handler = {
  GET: handle(app),
  POST: handle(app),
  PUT: handle(app),
  PATCH: handle(app),
  DELETE: handle(app),
}
