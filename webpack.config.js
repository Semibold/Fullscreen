const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");
const git = require("git-rev-sync");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const EventHooksPlugin = require("event-hooks-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const manifest = require("./package.json");

const webpackPath = path.resolve(__dirname, "dist/webpack");
const releasePath = path.resolve(__dirname, "dist/release");

/**
 * @desc Config
 */
module.exports = function(env = {}, argv = {}) {
    /**
     * @param {string} key
     * @param {*} [defArgument]
     * @return {*}
     */
    function getArgument(key, defArgument) {
        if (argv[key] != null) return argv[key];
        if (env[key] != null) return env[key];
        return defArgument;
    }

    env.lastCompiled = new Date().toISOString();
    env.mode = getArgument("mode", "production");
    env.devtool = getArgument("devtool", false);
    env.outputPath = env.mode === "production" ? releasePath : webpackPath;

    console.log(`webpack mode: ${env.mode}, git-commit hash: ${git.short()}, current branch: ${git.branch()}`);

    return {
        mode: env.mode,
        entry: {
            fullscreen: "./src/index.ts",
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
                                module: "esnext",
                            },
                        },
                    },
                },
            ],
        },
        output: {
            path: env.outputPath,
            filename: "[name].js",
            libraryTarget: "umd",
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new webpack.DefinePlugin({
                __X_METADATA__: JSON.stringify({
                    name: manifest.name,
                    version: manifest.version,
                    envMode: env.mode,
                    gitHash: git.short(),
                    lastCompiled: env.lastCompiled,
                }),
            }),
            new EventHooksPlugin({
                environment: function() {
                    rimraf.sync(webpackPath);
                    rimraf.sync(releasePath);
                },
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: env.mode === "production" ? "static" : "disabled",
                openAnalyzer: false,
            }),
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: Boolean(env.devtool),
                    extractComments: false,
                    uglifyOptions: {
                        compress: {
                            drop_console: false,
                            drop_debugger: true,
                        },
                        output: {
                            /**
                             * @desc escape Unicode characters in strings and regexps
                             *       (affects directives with non-ascii characters becoming invalid)
                             */
                            ascii_only: false,
                        },
                    },
                }),
            ],
        },
        node: false,
        performance: {
            hints: false,
        },
    };
};
