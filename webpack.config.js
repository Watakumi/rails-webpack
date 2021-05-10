const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './frontend/javascripts/application.js')
  },
  output: {
    path: path.resolve(__dirname, './public/assets'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            publicPath: 'assets/images',
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new WebpackManifestPlugin()
  ],
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
}