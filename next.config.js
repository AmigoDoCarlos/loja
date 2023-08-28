/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/loja',
}

//module.exports = nextConfig

const withPWA = require("@ducanh2912/next-pwa").default({
    cacheStartUrl: '',
    dest: "public",
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest.json$/]
});

module.exports = withPWA(nextConfig);