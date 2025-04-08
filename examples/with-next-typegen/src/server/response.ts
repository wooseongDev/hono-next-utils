import { Context } from 'hono'
import { headers } from 'next/headers'

export const response = (c: Context) => {
  return c.json({
    ok: true,
    field1: 'field1' as const,
    field2: 2 as const,
    field3: true as const,
    field4: [1, 2, '3'] as const,
    field5: { a: 1, b: '2', c: [3] } as const,
    field6: null,
  })
}
