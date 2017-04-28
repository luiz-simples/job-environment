const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  devtool: 'cheap-module-source-map',

  node: {
    __dirname: false
  },

  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  entry: {
    bundle: './run.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'personal.js'
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },

  module: {
    loaders: [
      { test: /\.(key)$/, loader: 'raw-loader' },
      { test: /\.(html|htm)$/, loader: 'html-loader' },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
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
    })
  ]
}
