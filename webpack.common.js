const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const path = require('path');

module.exports = {
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
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            }
          },
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
}