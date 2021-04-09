/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */

const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }))
    return config
  },
  env: {
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL
  },
}
