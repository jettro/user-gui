const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function (env) {
    return {
        entry: './src/entry.js',
        output: {
            path: path.resolve('dist'),
            filename: 'index_bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    loader: ['react-hot-loader', 'babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    loaders: ['style-loader', 'css-loader', 'sass-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                mimetype: 'application/font-woff'
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [
                        {loader: 'file-loader'}
                    ]
                },
                {
                    test: /\.(jpg|png)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 25000,
                    },
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                inject: 'body'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'API_URL': JSON.stringify((env === 'prod') ? 'https://zinvolzoeken.luminis.amsterdam' : 'http://localhost:8080'),
                    'NODE_ENV': JSON.stringify((env === 'prod') ? 'production' : '')
                }
            })
        ],
        devtool: JSON.stringify((env === 'prod') ? 'eval' : 'inline-source-map'),
        devServer: {
            historyApiFallback: true
        },
    }
};