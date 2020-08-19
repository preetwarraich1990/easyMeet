const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

('use strict');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.PUBLIC_URL = '';
process.env.API_URL = '';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'smacty-bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|ico|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'eval',
    stats: {
        loggingTrace: false,
        moduleTrace: false
    },
    performance: {
        hints: false
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 5010,
        open: false,
        hot: true,
        historyApiFallback: true,
        https: false,
        // key: fs.readFileSync('C:/ZDATA/900 - House.CONNECT/10 - Implementation/05 - Cloud/01 - SmactyCloud/certs/smacty.key'),
        // cert: fs.readFileSync('C:/ZDATA/900 - House.CONNECT/10 - Implementation/05 - Cloud/01 - SmactyCloud/certs/smacty.crt'),
        // ca: fs.readFileSync('C:/ZDATA/900 - House.CONNECT/10 - Implementation/05 - Cloud/01 - SmactyCloud/certs/smactyCA.crt')
    },
    plugins: [
        new Dotenv({
            path: path.join(__dirname, 'config', 'dev.env'),
            safe: true
        }),
        new webpack.DefinePlugin({
            'process.env.API_HOST': JSON.stringify(process.env.API_HOST)
        }),
        new CopyPlugin([
            {
                from: 'public/',
                to: ''
            }
        ])
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src/')
        }
    }
};
