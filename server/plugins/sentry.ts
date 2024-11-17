import * as Sentry from '@sentry/node'
import { ProfilingIntegration } from '@sentry/profiling-node'
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
        integrations: [
            new ProfilingIntegration(),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Change in production!
        // Set sampling rate for profiling - this is relative to tracesSampleRate
        profilesSampleRate: 1.0 // Change in production!
    })
    // Here comes the hooks
})