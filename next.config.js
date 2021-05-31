const withPWA = require('next-pwa');

module.exports = withPWA({
    images: {
        domains: ['via.placeholder.com'],
    },
    pwa: {
        dest: 'public',
    },
});
