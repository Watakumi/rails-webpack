const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    disableHostCheck: true,
    hot: true,
    host: '0.0.0.0', 
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    contentBase: path.resolve(__dirname, './public/assets')
  },
  devtool: 'inline-source-map'
})
