if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let d={};const n=e=>i(e,s),o={module:{uri:s},exports:d,require:n};a[s]=Promise.all(c.map((e=>o[e]||n(e)))).then((e=>(t(...e),d)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/loja/_next/static/ZuThgFKN4uAH6y_CWFdu6/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/loja/_next/static/ZuThgFKN4uAH6y_CWFdu6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/loja/_next/static/chunks/210-93b7353c3f5f2680.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/319-d97e6c2ba74eabcd.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/361-f04ae789044f88fc.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/750-2c4e6d6d9c655498.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/app/about/page-a8c5d2c8259364da.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/app/layout-0fbef1af36aa9dac.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/app/page-f3f6b2e4c588776b.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/app/products/page-85181f607239edde.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/app/terms/page-81650ddefd21fa5d.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/c15bf2b0-69d41aa00fd7e843.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/fd9d1056-186bb04d793e8055.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/main-app-51c7a0f09e3b1d88.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/main-f2795ac0234fe6f2.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/loja/_next/static/chunks/webpack-9433d0e1f232dc60.js",revision:"ZuThgFKN4uAH6y_CWFdu6"},{url:"/loja/_next/static/css/507ec52a63ec9067.css",revision:"507ec52a63ec9067"},{url:"/loja/_next/static/css/983e696430a8ec16.css",revision:"983e696430a8ec16"},{url:"/loja/_next/static/css/ab75505153a4a040.css",revision:"ab75505153a4a040"},{url:"/loja/_next/static/css/b90e37a6d4a31c40.css",revision:"b90e37a6d4a31c40"},{url:"/loja/_next/static/css/f9fbc85f7fa6433e.css",revision:"f9fbc85f7fa6433e"},{url:"/loja/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/loja/_next/static/media/3dprint1.1328fc40.jpg",revision:"6e4c98c89f712a765b10940120644af8"},{url:"/loja/_next/static/media/3dprint2.82c5cc3b.jpg",revision:"8224c2f351aa7d7d8ca4d7f0466e7617"},{url:"/loja/_next/static/media/3dprint3.134dac8d.jpg",revision:"bf624e1f1e552f0e0c8cb5991841151e"},{url:"/loja/_next/static/media/3dprint4.aee75a1f.jpg",revision:"42c04f07de6ca6ddfb0d7a436e2395da"},{url:"/loja/_next/static/media/3dprint5.49be0f13.jpg",revision:"e91d3b48342f8919604b0dca013bd66e"},{url:"/loja/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/loja/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/loja/_next/static/media/apollo1.c08685d6.jpg",revision:"f064d2c0bf17cec166a5edbd3505af99"},{url:"/loja/_next/static/media/apollo2.6da148db.jpg",revision:"c38813435f7247ce25f3805fff4130a1"},{url:"/loja/_next/static/media/apollo3.44e3f0c0.jpg",revision:"44d1960a53aeb80db0123a60ee848f35"},{url:"/loja/_next/static/media/apollo4.8bc26960.jpg",revision:"6d4a8d4920771496733d65129b0afdf1"},{url:"/loja/_next/static/media/apollo5.0cda406b.jpg",revision:"3fb86c9d01dbd691993d02a420f19c25"},{url:"/loja/_next/static/media/apollo6.ea7dcae4.jpg",revision:"fddcd50c56cd301970283ced5495fe12"},{url:"/loja/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/loja/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/loja/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/loja/_next/static/media/city1.a976cffa.jpg",revision:"7d0d8eac2c069375ba0ceefcc1e3a80d"},{url:"/loja/_next/static/media/city2.bf24abe7.jpg",revision:"b2de727ca6b6647313feeb39ec23327c"},{url:"/loja/_next/static/media/city3.8a4b39a9.jpg",revision:"c3fbafc6c6be768312733910f5a77471"},{url:"/loja/_next/static/media/city4.99818faa.jpg",revision:"41258cd7462c290a7d8989eaf0d342cb"},{url:"/loja/_next/static/media/city5.f20746c0.jpg",revision:"a56147a1c1ec1f73c27f602ea09449d0"},{url:"/loja/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/loja/_next/static/media/ev31.c5cf9921.jpg",revision:"55892dee31c334a388fc78f69be197c4"},{url:"/loja/_next/static/media/ev32.4db3a62e.jpg",revision:"a7e5309d2566dceaa001e9c7993602d2"},{url:"/loja/_next/static/media/ev33.60917b3f.jpg",revision:"b951cdb439a56f3950514f2df2a53774"},{url:"/loja/_next/static/media/ev34.4fad978e.jpg",revision:"0b514d31434ad8cbedae95fd3114c1f0"},{url:"/loja/_next/static/media/ev35.278ac378.jpg",revision:"def0886452fab455d77a18e6ba83497c"},{url:"/loja/_next/static/media/ford1.3ba5d54d.jpg",revision:"003d24d0ff41cee43b8b32ee271b3a85"},{url:"/loja/_next/static/media/ford2.46122964.jpg",revision:"c2ab51db5e3b9068f6b285197e05f321"},{url:"/loja/_next/static/media/ford3.2bacf070.jpg",revision:"685eae5a127fe6af7cd38c533017596a"},{url:"/loja/_next/static/media/ford4.205b5521.jpg",revision:"6e45246a9a47ec54cfd6403d3c345fb4"},{url:"/loja/_next/static/media/ford5.498ed817.jpg",revision:"b665dee81982f37d679cb4fad766012f"},{url:"/loja/_next/static/media/heroes1.2c431906.jpg",revision:"93ca73b2357bc1967c079ccc92f24361"},{url:"/loja/_next/static/media/heroes2.c3c8e170.jpg",revision:"a07c1707c06fef451ea4c777bd1ae6c8"},{url:"/loja/_next/static/media/heroes3.6ba010bb.jpg",revision:"9f8629126be15f6bbcddf4bbee24e483"},{url:"/loja/_next/static/media/heroes4.f5c94073.jpg",revision:"92bf71905348fc07cd7e8a6661c5bf20"},{url:"/loja/_next/static/media/heroes5.3137164e.jpg",revision:"6b65c3011c558d717063deda15d9b2c8"},{url:"/loja/_next/static/media/jungle1.7dbdbe44.jpg",revision:"f3468c6dadf8440722502d705ef98ea3"},{url:"/loja/_next/static/media/jungle2.a5147f1b.jpg",revision:"3aa40b8a6036bd180550a51f19f07cf5"},{url:"/loja/_next/static/media/jungle3.acb15410.jpg",revision:"c2c26d312e2ac2fd69e098e5f911d001"},{url:"/loja/_next/static/media/jungle4.18360b43.jpg",revision:"24a552ebd1dbc634252a751bfc3adb8f"},{url:"/loja/_next/static/media/jungle5.a80366c0.jpg",revision:"3880f353545a532114ae9441eacaa2d7"},{url:"/loja/_next/static/media/left1.35674565.jpg",revision:"d16f0db55822f4019ce58c89ee15a88c"},{url:"/loja/_next/static/media/left1.35674565.jpg",revision:"35674565"},{url:"/loja/_next/static/media/left2.15e9d857.jpg",revision:"f8db1dd72f1e6869bbc6c3371ebc7df7"},{url:"/loja/_next/static/media/left3.0fd3e99c.jpg",revision:"1b1ee36a4df3d7b0f5c47470bb9eccb2"},{url:"/loja/_next/static/media/luke1.28cb568c.jpg",revision:"4f63fbe26ac2a7023ac081549b71b5e9"},{url:"/loja/_next/static/media/luke2.0b96cae6.jpg",revision:"d3d65abee73dad23ef908f192c475fe0"},{url:"/loja/_next/static/media/luke3.21c5fc8a.jpg",revision:"5d5354015069bf38df309a7919bd3205"},{url:"/loja/_next/static/media/luke4.d7de34f9.jpg",revision:"c21ef106cf5e39887ec73552edbff598"},{url:"/loja/_next/static/media/luke5.43d6f7b8.jpg",revision:"422d31836abf0ee623ef1e4f033c467f"},{url:"/loja/_next/static/media/luke6.1d28bdea.jpg",revision:"5182ce6f18434827d31af2d4f9114fff"},{url:"/loja/_next/static/media/macaw1.cf41f607.jpg",revision:"2aa4295a315b32b86d5a47463dd4833f"},{url:"/loja/_next/static/media/macaw2.6713b6e8.jpg",revision:"2ee79032753c0cee15b76abc21445bc9"},{url:"/loja/_next/static/media/macaw3.93ee09b4.jpg",revision:"7ade56ebea2583693e18047ea7d52d53"},{url:"/loja/_next/static/media/macaw4.a14c9075.jpg",revision:"fe208c9111d37420c1a1f8538d9c24cd"},{url:"/loja/_next/static/media/macaw5.eb04ae23.jpg",revision:"7d2796e6a7a618658dde0551cf6dca5b"},{url:"/loja/_next/static/media/mclaren1.b0483e83.jpg",revision:"46d3e7cf829f672d0f77e07fe37e5a99"},{url:"/loja/_next/static/media/mclaren2.29a2e919.jpg",revision:"fbaf998a4b6150cf3eb0aa29a864a06a"},{url:"/loja/_next/static/media/mclaren3.006106fa.jpg",revision:"8cb8a39dbf95f332fccebc05fc3d54ee"},{url:"/loja/_next/static/media/mclaren4.e3767383.jpg",revision:"bb7ffa33612fd3d0d11e95f1e4c89652"},{url:"/loja/_next/static/media/mclaren5.c080ee98.jpg",revision:"5e87d6d145198af4812abc8025bf8b28"},{url:"/loja/_next/static/media/mclaren6.b1b829ea.jpg",revision:"cd2493d2a0be79d47bcaafb30fbdf4c8"},{url:"/loja/_next/static/media/mclaren7.a07c1cf0.jpg",revision:"fa6cc647d6cd9872f4c109d9125c13fd"},{url:"/loja/_next/static/media/nitro1.cf025bd1.jpg",revision:"76339bc8bfa975e8062e0fde3710f406"},{url:"/loja/_next/static/media/nitro2.df23947e.jpg",revision:"0eeff0d0486441340d87963e1218f4e5"},{url:"/loja/_next/static/media/nitro3.eef07e7c.jpg",revision:"5d193843f944087689122722c4df9dba"},{url:"/loja/_next/static/media/nitro4.1850cb50.jpg",revision:"3917be737e497413454832acf16748f6"},{url:"/loja/_next/static/media/nitro5.b789522b.jpg",revision:"5cbfae34df9988ce91c219887a4cb40d"},{url:"/loja/_next/static/media/pilots1.bc389768.jpg",revision:"1887440d2de768171f450b9d1be5a6d3"},{url:"/loja/_next/static/media/pilots2.4321e8d9.jpg",revision:"a06a98a340fa66d0a8c2b353a1f62565"},{url:"/loja/_next/static/media/pilots3.780ace96.jpg",revision:"bc87d505722c80e65c3ea5ab8a4f090d"},{url:"/loja/_next/static/media/pilots4.15b3c774.jpg",revision:"7ea66174ece99e06e1718374ca8029e4"},{url:"/loja/_next/static/media/pilots5.3594f69a.jpg",revision:"b69e774bfad8d40dd121a59eff7bff53"},{url:"/loja/_next/static/media/profile.80755836.jpg",revision:"89b47850d4168672521c8a708fc2b67e"},{url:"/loja/_next/static/media/profile2.1240555f.png",revision:"49c6693c9b48d1b3da04a56fcb318fd0"},{url:"/loja/_next/static/media/pull1.5dd29803.jpg",revision:"1e3f559dd91a32030138a1142b0b7d51"},{url:"/loja/_next/static/media/pull2.8ae78103.jpg",revision:"318aa2d2ccc463274751c996eb8b9d84"},{url:"/loja/_next/static/media/pull3.e1bdcf47.jpg",revision:"efe9222991456a12895d530e2afe1b65"},{url:"/loja/_next/static/media/pull4.971b854b.jpg",revision:"9497375ff4c08791c063f1d5c23191a1"},{url:"/loja/_next/static/media/pull5.357bdb2c.jpg",revision:"453842b77d55116aa0386d74d9c478b6"},{url:"/loja/_next/static/media/racers1.6976efde.jpg",revision:"f733d07574bdb35a5cea6044af3ff49f"},{url:"/loja/_next/static/media/racers2.6bd897d7.jpg",revision:"bb2b4b72fe79a532881edb0cdd38a087"},{url:"/loja/_next/static/media/racers3.29b6059b.jpg",revision:"80158f843018e43f0ea7618dfb538ba5"},{url:"/loja/_next/static/media/racers4.c3a4d423.jpg",revision:"af83496513be2f8c4d819b0a4260da65"},{url:"/loja/_next/static/media/racers5.6039ed66.jpg",revision:"b8db1e14caf9a7dc2a0c4b95ad718f87"},{url:"/loja/_next/static/media/right1.a14c9075.jpg",revision:"fe208c9111d37420c1a1f8538d9c24cd"},{url:"/loja/_next/static/media/right2.c5d43b57.jpg",revision:"6a0e54ef9fb74b1438e940c35540bdaa"},{url:"/loja/_next/static/media/right3.89937d81.jpg",revision:"f35f6695aadb12f8645e3f17e6da697d"},{url:"/loja/_next/static/media/skyline.72517df3.jpg",revision:"7b4cce05e3a03b68fb79e19145156935"},{url:"/loja/_next/static/media/speed1.00275ee1.jpg",revision:"467c0979d0d9a8a0dd7af72c3b29b36d"},{url:"/loja/_next/static/media/speed2.ea9e4ea5.jpg",revision:"381bad2485a2297fa6552bd917c9f43b"},{url:"/loja/_next/static/media/speed3.c91766a8.jpg",revision:"449308e49c2d4d8e9b658da6155eef80"},{url:"/loja/_next/static/media/speed4.837e9fb4.jpg",revision:"3b41f94029e3854bc135949028b2b47e"},{url:"/loja/_next/static/media/speed5.13f63e5a.jpg",revision:"68cf3aca5fd36994648b38482e7d074e"},{url:"/loja/_next/static/media/speed6.959c90e4.jpg",revision:"3c98922e41291ab25d52b9b6a0cbc286"},{url:"/loja/_next/static/media/sw1.d15b30dd.jpg",revision:"e1bbaa077777384753dab36c839e4250"},{url:"/loja/_next/static/media/sw2.c80a5d88.jpg",revision:"5f3d5d624f3c258ccec8fd9334ebdf97"},{url:"/loja/_next/static/media/sw3.f2eff6b4.jpg",revision:"7031043e7efd4a5fde2ecc686b91797a"},{url:"/loja/_next/static/media/sw4.ed041175.jpg",revision:"fe9bc9d5af02146c00784836751b0557"},{url:"/loja/_next/static/media/sw5.f728303e.jpg",revision:"0c0a7be28e8c7650045c935e81f17fd6"},{url:"/loja/_next/static/media/tiny1.6375e365.jpg",revision:"089322831c4555dff25110273e802394"},{url:"/loja/_next/static/media/tiny2.37d900e4.jpg",revision:"1e888ea756cf4d1236d57f6a0359f05f"},{url:"/loja/_next/static/media/tiny3.cff849df.jpg",revision:"7dc758ad0f0a29b2ce1eb5c645500f2f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/loja",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
