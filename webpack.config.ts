import path from 'path';
import webpack from 'webpack';
import EventHooksPlugin from 'event-hooks-webpack-plugin';
import {ProjectD} from './gulpfile';

export interface EnvOptions {
    lastModified?: string;
    mode?: 'none' | 'development' | 'production';
    rules?: webpack.RuleSetRule[];
}

export interface ArgvOptions {
    mode?: EnvOptions['mode'];
}

export const webpackPath = path.resolve(__dirname, 'dist/webpack');
export const releasePath = path.resolve(__dirname, 'dist/release');

// @ts-ignore
// process.traceDeprecation = true;

export default function (env: EnvOptions = {}, argv: ArgvOptions = {}): webpack.Configuration {
    env.mode = argv.mode || env.mode || 'development';
    env.rules = env.rules || [];
    env.lastModified = new Date().toISOString();

    global.console.log('webpack runtime environment:', env.mode);

    const devtool = env.mode === 'production' ? 'source-map' :
        env.mode === 'development' ? 'cheap-module-eval-source-map' : false;

    return {
        mode: env.mode,
        entry: {
            [ProjectD.manifest.name]: './src/index.ts',
        },
        devtool: devtool,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                module: 'esnext',
                            },
                        },
                    },
                },
                ...env.rules,
            ],
        },
        output: {
            path: webpackPath,
            filename: '[name].js',
            libraryTarget: 'umd',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new webpack.DefinePlugin({
                __X_METADATA__: JSON.stringify({
                    mode: env.mode,
                    name: ProjectD.manifest.name,
                    gitHash: ProjectD.gitHash,
                    version: ProjectD.manifest.version,
                    lastModified: env.lastModified,
                }),
            }),
            new EventHooksPlugin({
                environment: function () {
                    ProjectD.cleanDirectory(env);
                },
                done: function () {
                    ProjectD.releaseHander(env, [
                        path.resolve(__dirname, `dist/webpack/${ProjectD.manifest.name}.js`),
                    ]);
                },
            }),
        ],

        performance: {
            hints: false,
        },
        watchOptions: {
            ignored: /node_modules/,
        },
    };
}
