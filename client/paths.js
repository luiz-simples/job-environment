const path = require('path')

module.exports = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  main: path.join(__dirname, 'src/index.js'),
  build: path.join(__dirname, 'build'),
  index: path.join(__dirname, 'src/index.html'),
  modules: path.join(__dirname, 'node_modules')
}
