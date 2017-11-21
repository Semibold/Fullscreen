const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './source/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'fullscreen.min.js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new webpack.ProgressPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {ascii_only: true}
        }),
    ],
    watchOptions: {
        ignored: [/node_modules/]
    }
};
