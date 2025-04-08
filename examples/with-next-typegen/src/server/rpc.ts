import { App } from '@/typegen/app'
import { hc } from 'hono/client'

export const rpc = hc<App>('/')

export const example = async () => {
  const fetcher = rpc.api.route1[':id'].$get

  const response = await fetcher({
    param: { id: '1' },
  })

  const _data = await response.json()
}
