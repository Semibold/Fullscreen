const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");
const EventHooksPlugin = require("event-hooks-webpack-plugin");
const git = require("git-rev-sync");

const manifest = require("./package.json");

const webpackPath = path.resolve(__dirname, "dist/webpack");
const releasePath = path.resolve(__dirname, "dist/release");

/**
 * @desc Config
 */
module.exports = function(env = {}, argv = {}) {
    env.mode = argv.mode || env.mode || "production";
    env.lastModified = new Date().toISOString();

    switch (env.mode) {
        case "production":
            env.devtool = "source-map";
            env.outputPath = releasePath;
            break;
        case "development":
            env.devtool = "cheap-module-eval-source-map";
            env.outputPath = webpackPath;
            break;
        case "none":
        default:
            env.devtool = false;
            env.outputPath = webpackPath;
            break;
    }

    console.log(`webpack mode: ${env.mode}, git-commit hash: ${git.short()}`);

    return {
        mode: env.mode,
        entry: {
            fullscreen: "./src/index.ts"
        },
        devtool: env.devtool,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: {
                                module: "esnext"
                            }
                        }
                    }
                }
            ]
        },
        output: {
            path: env.outputPath,
            filename: "[name].js",
            libraryTarget: "umd"
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new webpack.DefinePlugin({
                __X_METADATA__: JSON.stringify({
                    mode: env.mode,
                    name: manifest.name,
                    version: manifest.version,
                    gitHash: git.short(),
                    lastModified: env.lastModified
                })
            }),
            new EventHooksPlugin({
                environment: function() {
                    rimraf.sync(webpackPath);
                    rimraf.sync(releasePath);
                }
            })
        ],
        node: false,
        performance: {
            hints: false
        }
    };
};
