import { sum } from '@/utils/sum'
import { storage } from './storage'

export const response = () => {
  storage.set('key', Math.random().toString(36).slice(2))

  return {
    sum: sum(1, 2),
    storage: storage.get('key'),

    field1: 1,
    field2: 'string',
    field3: true,
    field5: null,
    field6: undefined,
    field7: [],
    field8: [1, 2, 3],
    field9: [
      [1, 2],
      [3, 4],
    ],
    field10: {},
    field11: { a: { b: 2 }, c: [1, 2, 3] },
  }
}
