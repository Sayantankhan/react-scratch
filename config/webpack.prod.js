 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 var path = require('path');

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   optimization: {
      minimize: false
   },
 });