const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');
const chalk = require('chalk');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: {
            disableDotRule: true
        },
        disableHostCheck: true,
        contentBase: path.join(__dirname, '../build'),
        compress: true,
        hot: true,
        quiet: true,
        overlay: false,
        after: function(app, server) {
            console.log(chalk.blue('Server Up'));
        }
    }
});