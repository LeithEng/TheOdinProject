const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development',
    entry: './weather.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
     
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ],
    },
    plugins: [
        new Dotenv({
            path: './.env',
            systemvars: true,
        }),
  
        new HtmlWebpackPlugin({
            template: './weather.html',
            filename: 'index.html'
        })
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        hot: true,
    },
};