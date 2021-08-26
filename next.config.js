const withPWA = require('next-pwa');
const { withSentryConfig } = require('@sentry/nextjs');

const { i18n } = require('./next-i18next.config');

module.exports = withPWA(
    withSentryConfig(
        {
            i18n,
            pwa: {
                dest: 'public',
            },
        },
        { silent: true }
    )
);
