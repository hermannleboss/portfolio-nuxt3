import * as Sentry from '@sentry/node'
export default defineNitroPlugin((nitroApp) => {
    const { public: { sentry } } = useRuntimeConfig()
    // If no sentry DSN set, ignore and warn in the console
    if (!sentry.dsn) {
        console.warn('Sentry DSN not set, skipping Sentry initialization')
        return
    }
    // Initialize Sentry
    Sentry.init({
        dsn: sentry.dsn,
        environment: sentry.environment,
        // Performance Monitoring
        tracesSampleRate: 1.0
    })
    // Here comes the hooks
})
