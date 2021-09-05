const withPWA = require('next-pwa');
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withPWA(
    withSentryConfig(
        {
            experimental: { esmExternals: true }
            images: {
                domains: ['via.placeholder.com'],
            },
            pwa: {
                dest: 'public',
            },
        },
        { silent: true }
    )
);
