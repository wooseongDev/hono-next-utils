export type NextTypegenOptions = {
  /**
   * Entry point file path for type generation
   */
  entry: string

  /**
   * Directory where generated type files will be stored
   */
  outDir: string

  /**
   * Path to tsconfig.json file
   * @default "./tsconfig.json"
   */
  tsconfig?: string

  /**
   * Whether to suppress log output
   * @default true
   */
  silent?: boolean
}
