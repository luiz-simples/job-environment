const PATHS = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',

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

  devServer: {
    port: '9090',
    host: '0.0.0.0',
    stats: 'errors-only',
    contentBase: PATHS.dist,
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({template: PATHS.index})
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [{loader: 'babel-loader'}]
    }, {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: {modules: true} }
      ]
    }, {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'less-loader' }
      ]
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
          limit: 10000,
          name: 'static/media/[name].[ext]'
        }
      }]
    }]
  },

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
