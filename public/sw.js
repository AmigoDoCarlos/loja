if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let o={};const d=e=>i(e,t),n={module:{uri:t},exports:o,require:d};a[t]=Promise.all(s.map((e=>n[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/lojadoalex/_next/static/chunks/319-c7dffd9a93252afb.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/361-902b765b3682e517.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/477-9dd4a5e8674d6ed9.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/750-2c4e6d6d9c655498.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/app/about/page-91fd650be73efa7e.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/app/layout-d723132929aff280.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/app/page-ccf682a58162613b.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/app/products/page-a19ec528fd386fdd.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/app/terms/page-25d31a77769151ef.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/c15bf2b0-69d41aa00fd7e843.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/fd9d1056-186bb04d793e8055.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/main-app-51c7a0f09e3b1d88.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/main-e633e11ba758f014.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/lojadoalex/_next/static/chunks/webpack-bde8c4ba9329f8ed.js",revision:"e4RvT513wWgJaGPFThqIR"},{url:"/lojadoalex/_next/static/css/14f586ae76489f76.css",revision:"14f586ae76489f76"},{url:"/lojadoalex/_next/static/css/16b249ffe1fd4b8a.css",revision:"16b249ffe1fd4b8a"},{url:"/lojadoalex/_next/static/css/3d4acf80a3440ec8.css",revision:"3d4acf80a3440ec8"},{url:"/lojadoalex/_next/static/css/9a08068ab7f55dee.css",revision:"9a08068ab7f55dee"},{url:"/lojadoalex/_next/static/css/e791800029417cd2.css",revision:"e791800029417cd2"},{url:"/lojadoalex/_next/static/e4RvT513wWgJaGPFThqIR/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/lojadoalex/_next/static/e4RvT513wWgJaGPFThqIR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/lojadoalex/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/lojadoalex/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/lojadoalex/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/lojadoalex/_next/static/media/apollo1.c08685d6.jpg",revision:"f064d2c0bf17cec166a5edbd3505af99"},{url:"/lojadoalex/_next/static/media/apollo2.6da148db.jpg",revision:"c38813435f7247ce25f3805fff4130a1"},{url:"/lojadoalex/_next/static/media/apollo3.44e3f0c0.jpg",revision:"44d1960a53aeb80db0123a60ee848f35"},{url:"/lojadoalex/_next/static/media/apollo4.8bc26960.jpg",revision:"6d4a8d4920771496733d65129b0afdf1"},{url:"/lojadoalex/_next/static/media/apollo5.0cda406b.jpg",revision:"3fb86c9d01dbd691993d02a420f19c25"},{url:"/lojadoalex/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/lojadoalex/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/lojadoalex/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/lojadoalex/_next/static/media/city1.a976cffa.jpg",revision:"7d0d8eac2c069375ba0ceefcc1e3a80d"},{url:"/lojadoalex/_next/static/media/city2.bf24abe7.jpg",revision:"b2de727ca6b6647313feeb39ec23327c"},{url:"/lojadoalex/_next/static/media/city3.8a4b39a9.jpg",revision:"c3fbafc6c6be768312733910f5a77471"},{url:"/lojadoalex/_next/static/media/city4.99818faa.jpg",revision:"41258cd7462c290a7d8989eaf0d342cb"},{url:"/lojadoalex/_next/static/media/city5.f20746c0.jpg",revision:"a56147a1c1ec1f73c27f602ea09449d0"},{url:"/lojadoalex/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/lojadoalex/_next/static/media/ev31.c5cf9921.jpg",revision:"55892dee31c334a388fc78f69be197c4"},{url:"/lojadoalex/_next/static/media/ev32.4db3a62e.jpg",revision:"a7e5309d2566dceaa001e9c7993602d2"},{url:"/lojadoalex/_next/static/media/ev33.60917b3f.jpg",revision:"b951cdb439a56f3950514f2df2a53774"},{url:"/lojadoalex/_next/static/media/ev34.4fad978e.jpg",revision:"0b514d31434ad8cbedae95fd3114c1f0"},{url:"/lojadoalex/_next/static/media/ev35.278ac378.jpg",revision:"def0886452fab455d77a18e6ba83497c"},{url:"/lojadoalex/_next/static/media/left1.35674565.jpg",revision:"d16f0db55822f4019ce58c89ee15a88c"},{url:"/lojadoalex/_next/static/media/left1.35674565.jpg",revision:"35674565"},{url:"/lojadoalex/_next/static/media/left2.15e9d857.jpg",revision:"f8db1dd72f1e6869bbc6c3371ebc7df7"},{url:"/lojadoalex/_next/static/media/left3.0fd3e99c.jpg",revision:"1b1ee36a4df3d7b0f5c47470bb9eccb2"},{url:"/lojadoalex/_next/static/media/macaw1.de315c36.jpg",revision:"969c6b2906c6c4718f36e4b49719f50c"},{url:"/lojadoalex/_next/static/media/macaw2.10c064a1.jpg",revision:"ccff61ea35b9c09148d7c9687b551296"},{url:"/lojadoalex/_next/static/media/macaw3.7264523b.jpg",revision:"266d63dea2f91c4d6e3ae0347c1e1e46"},{url:"/lojadoalex/_next/static/media/macaw4.1ff8a2e7.jpg",revision:"c8edd7a763f1ac7acdee295b4279aab9"},{url:"/lojadoalex/_next/static/media/mclaren1.ca341def.jpg",revision:"391d085b9b202aa4570c34c984130ec2"},{url:"/lojadoalex/_next/static/media/mclaren2.c9d64d61.jpg",revision:"41f3238d9aca2b756e59b926c9311850"},{url:"/lojadoalex/_next/static/media/mclaren3.f25033f6.jpg",revision:"f9406636af0e4be9d50a421768b98b77"},{url:"/lojadoalex/_next/static/media/mclaren4.1280f69c.jpg",revision:"a53bd2cdf34ca4d1f219cf1214c76e5f"},{url:"/lojadoalex/_next/static/media/mclaren5.f39ccda2.jpg",revision:"256c2b0293118d6cf8b5650c707b6d28"},{url:"/lojadoalex/_next/static/media/nitro1.cf025bd1.jpg",revision:"76339bc8bfa975e8062e0fde3710f406"},{url:"/lojadoalex/_next/static/media/nitro2.df23947e.jpg",revision:"0eeff0d0486441340d87963e1218f4e5"},{url:"/lojadoalex/_next/static/media/nitro3.eef07e7c.jpg",revision:"5d193843f944087689122722c4df9dba"},{url:"/lojadoalex/_next/static/media/nitro4.1850cb50.jpg",revision:"3917be737e497413454832acf16748f6"},{url:"/lojadoalex/_next/static/media/nitro5.b789522b.jpg",revision:"5cbfae34df9988ce91c219887a4cb40d"},{url:"/lojadoalex/_next/static/media/profile.80755836.jpg",revision:"89b47850d4168672521c8a708fc2b67e"},{url:"/lojadoalex/_next/static/media/profile2.1240555f.png",revision:"49c6693c9b48d1b3da04a56fcb318fd0"},{url:"/lojadoalex/_next/static/media/right1.a14c9075.jpg",revision:"fe208c9111d37420c1a1f8538d9c24cd"},{url:"/lojadoalex/_next/static/media/right2.c5d43b57.jpg",revision:"6a0e54ef9fb74b1438e940c35540bdaa"},{url:"/lojadoalex/_next/static/media/right3.89937d81.jpg",revision:"f35f6695aadb12f8645e3f17e6da697d"},{url:"/lojadoalex/_next/static/media/skyline.72517df3.jpg",revision:"7b4cce05e3a03b68fb79e19145156935"},{url:"/lojadoalex/_next/static/media/speed1.00275ee1.jpg",revision:"467c0979d0d9a8a0dd7af72c3b29b36d"},{url:"/lojadoalex/_next/static/media/speed2.ea9e4ea5.jpg",revision:"381bad2485a2297fa6552bd917c9f43b"},{url:"/lojadoalex/_next/static/media/speed3.c91766a8.jpg",revision:"449308e49c2d4d8e9b658da6155eef80"},{url:"/lojadoalex/_next/static/media/speed4.837e9fb4.jpg",revision:"3b41f94029e3854bc135949028b2b47e"},{url:"/lojadoalex/_next/static/media/speed5.13f63e5a.jpg",revision:"68cf3aca5fd36994648b38482e7d074e"},{url:"/lojadoalex/_next/static/media/speed6.959c90e4.jpg",revision:"3c98922e41291ab25d52b9b6a0cbc286"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/lojadoalex",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
