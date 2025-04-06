import { App } from '@/server/app'
import { hc } from 'hono/client'

export const rpc = hc<App>('/')

export const example = async () => {
  const fetcher = rpc.api.route200[':id'].$get

  const response = await fetcher({
    param: {
      id: '123',
    },
  })

  console.log(response)
}
