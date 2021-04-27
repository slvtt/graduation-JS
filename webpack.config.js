const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const filename = ext => isDev ?
    `[name].${ext}` :
    `[name].[fullhash].${ext}`;

let conf = {
    entry: {
        main: ['@babel/polyfill', './index.js']
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
        new CleanWebpackPlugin()
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
                    'sass-loader'
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
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    devServer: {
        contentBase: './build',
        hot: true,
        port: 3000,
        open: true,
        writeToDisk: false,
    },
}

module.exports = conf;