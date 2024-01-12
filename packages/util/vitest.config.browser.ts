import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'test/provider.spec.ts', 'test/asyncEventEmitter.spec.ts'],
  },
  plugins: [nodePolyfills()],
})
