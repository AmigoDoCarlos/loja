/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/lojadoalex',
}

//module.exports = nextConfig

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest.json$/]
});

module.exports = withPWA(nextConfig);