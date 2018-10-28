process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('../config/webpack.prod');
const chalk = require('chalk')

build();

function build() {
    console.log(chalk.blue('Creating an optimized production build...'));
    let compiler = webpack(config);
    return new Promise((resolve,reject) => {
        compiler.run((err,status) =>{
            let messages;
            if (err) {
                if (!err.message) {
                    return reject(err);
                }
            } else {
            }
        })
    });
}  