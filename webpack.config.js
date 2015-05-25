var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: "./src/Flippa.js",

  externals: nodeModules,

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },

  node: {
    __dirname: true,
    __filename: true
  },

  output: {
    path: "./dist/",
    filename: "flippa.js"
  },

  target: "node"
}
