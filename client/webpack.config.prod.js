const PATHS = require('./paths')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractStyle = new ExtractTextPlugin({
  filename: 'static/css/[name].[contenthash:8].css'
})

module.exports = {
  devtool: 'cheap-module-source-map',
  target: 'web',

  entry: {main: PATHS.main},

  output: {
    path: PATHS.build,
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[hash:8].chunk.js'
  },

  resolve: {
    modules: [
      PATHS.src,
      'node_modules'
    ]
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [{loader: 'babel-loader'}]
    }, {
      test: /\.css$/,
      use: extractStyle.extract({
        use: [{loader: 'css-loader', options: {minimize: true}}]
      })
    }, {
      test: /\.less$/,
      use: extractStyle.extract({
        use: [
          {loader: 'css-loader', options: {minimize: true}},
          {loader: 'less-loader'}
        ]
      })
    }, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: [{
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[ext]'
        }
      }]
    }, {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        query: {
          name: 'static/media/[name].[ext]'
        }
      }]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: PATHS.index,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      sourceMap: true,
      compress: { warnings: false },
      output: { comments: false }
    }),

    extractStyle
  ]
}
