const withPWA = require('next-pwa')({
    buildExcludes: [/middleware-manifest.json$/], // See: https://github.com/shadowwalker/next-pwa/issues/288
    dest: 'public',
});

module.exports = withPWA({
    images: {
        domains: ['via.placeholder.com'],
    },
});
