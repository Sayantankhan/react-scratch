var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry :{
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'
      },
      {
        test: /\.js$/, include: /src/, use: ['eslint-loader']
      }
    ]
  },
  plugins: [
      new HtmlWebPackPlugin({inject: true, template: "./public/index.html", filename: "./index.html"}),
      new CleanWebpackPlugin(['build']),
  ],
  output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].bundle.js'
  }
};