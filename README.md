# http-middleware-test

This repo is to test the @nuxt/http module's onRequest middleware. It seems to cause nuxt generate to hang forever if you add an onResponse hook. 

If you run this as is, the build never finishes. 
If you comment out the $http.onRequest function in ~/plugins/http-middleware.server.js, the build should finish. 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
