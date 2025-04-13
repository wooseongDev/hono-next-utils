const store = new Map<string, string>()

export const storage = {
  get: (key: string) => store.get(key),
  set: (key: string, value: string) => store.set(key, value),
  delete: (key: string) => store.delete(key),
  clear: () => store.clear(),
}
