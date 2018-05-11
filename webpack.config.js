/**
 * module bundler
 */

const del = require('del');
const path = require('path');
const webpack = require('webpack');
const EventHooksPlugin = require('event-hooks-webpack-plugin');

/**
 * @desc webpack
 */
module.exports = (env = {}) => {

    const outputPath = path.resolve(__dirname, './dist/out-web');

    console.info('webpack runtime environment:', env);

    return {

        mode: 'development',

        entry: {
            fullscreen: path.resolve(__dirname, './source/index.ts'),
        },

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
            publicPath: outputPath,
            host: 'localhost',
            port: 8080,
            open: false,
            openPage: './index.html',
            headers: {
                'X-Custom-Server': 'webpack-dev-server',
            },
        },

        output: {
            path: outputPath,
            filename: '[name].js',
            libraryTarget: 'umd',
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
        },

        plugins: [
            new webpack.ProgressPlugin(),
            new EventHooksPlugin({
                environment: function () {
                    console.log('Starting: preproccess');
                    del.sync(outputPath);
                    console.log('Finished: preproccess');
                },
            }),
        ],
    };

};
