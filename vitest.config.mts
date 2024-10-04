import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
        globals: true,
        coverage: {
            // provider: 'v8',
            provider: 'istanbul',
        },
        setupFiles: ['./vitest.setup.ts'],
    }
})