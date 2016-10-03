var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './client/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "client"),
                ],
            }
        ],
        loaders: [
            {
                loaders: [ 'babel-loader' ],
                include: [
                    path.resolve(__dirname, "client"),
                ],
                test: /\.js$/,
                plugins: [ 'transform-runtime' ],
            }
        ]
    }
};