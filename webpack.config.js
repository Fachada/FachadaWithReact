module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    serverRuntimeConfig: { // Will only be available on the server side
      mySecret: 'secret'
    }
    // Important: return the modified config
    return config
  },


  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    publicRuntimeConfig: { // Will be available on both server and client
       staticFolder: '/index.js'
        }
    // Important: return the modified config
    return config
  }
}
