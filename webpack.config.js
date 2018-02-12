/**
 * module bundler
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: path.resolve(__dirname, './source/index.ts'),

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },

    devServer: {
        overlay: true,
        compress: true,
        publicPath: '/dist/out-web/',
        host: 'localhost',
        port: 8080,
        open: false,
        openPage: './index.html',
        headers: {
            'X-Custom-Server': 'webpack-dev-server',
        },
    },

    output: {
        path: path.resolve(__dirname, './dist/out-web'),
        filename: 'bundle.webpack.js',
        libraryTarget: 'umd',

        // @see https://github.com/google/closure-compiler/issues/2776
        // @see https://github.com/webpack/webpack/issues/238#issuecomment-174468364
        // @see https://webpack.js.org/configuration/output/#output-devtoolfallbackmodulefilenametemplate
        devtoolModuleFilenameTemplate: '[resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]',
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },

    plugins: [
        new webpack.ProgressPlugin(),
    ],

};
