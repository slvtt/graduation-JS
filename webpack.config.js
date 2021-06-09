const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const filename = ext => isDev ?
    `[name].${ext}` :
    `[name].[fullhash].${ext}`;

let conf = {
    entry: {
        main: ['webpack-dev-server/client?http://localhost:3000/','@babel/polyfill', './index.js']
    },
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
    },
    context:path.resolve(__dirname, 'src'),
    
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
        new CleanWebpackPlugin(),
        new Dotenv({
            path: './.env', // Path to .env file (this is the default)
            safe: true,
            allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
            systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
            silent: true, // hide any errors
            defaults: false // load '.env.defaults' as the default values if empty.// load .env.example (defaults to "false" which does not use dotenv-safe)
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    },
                },
            },

            {
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|ico|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name:`./img/${filename('[ext]')}`
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000,
        open: true,
        writeToDisk: false,
    },
    experiments: {
        topLevelAwait: true,
        asyncWebAssembly: true
    }
}

module.exports = conf;