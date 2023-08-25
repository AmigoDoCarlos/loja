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
});

module.exports = withPWA(nextConfig);