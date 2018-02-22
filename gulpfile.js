/**
 * gulp workflow
 */

const del = require('del');
const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const stripDebug = require('gulp-strip-debug');
const stripComments = require('gulp-strip-comments');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const closureCompiler = require('google-closure-compiler').gulp(null);
const streamToPromise = require('stream-to-promise');

const pathMapping = {
    closure_output: './dist/out-web/bundle.closure.js',
    release_output: './dist/out-web/bundle.min.js',
};

class Capsule {

    /**
     * @return {Promise<string[]>}
     */
    static cleanDirectory() {
        return del(webpackConfig.output.path);
    }

    /**
     * @return {Stream}
     */
    static bundler() {
        return gulp.src(webpackConfig.entry)
            .pipe(webpackStream(webpackConfig, webpack))
            .pipe(gulp.dest(webpackConfig.output.path));
    }

    /**
     * @return {Stream}
     */
    static compressor() {
        const output = webpackConfig.output;
        const globSrc = path.resolve(output.path, output.filename);
        const options = {
            externs: [
                './tools/closure-compiler/custom.js',
            ],
            warning_level: 'QUIET',
            compilation_level: 'SIMPLE',
            language_out: 'ECMASCRIPT5',
            js_output_file: pathMapping.closure_output,
        };
        return gulp.src(globSrc)
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(closureCompiler(options))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./'));
    }

    /**
     * @return {Stream}
     */
    static stripper() {
        return gulp.src(pathMapping.closure_output)
            .pipe(stripComments())
            .pipe(stripDebug())
            .pipe(rename(pathMapping.release_output))
            .pipe(gulp.dest('./'));
    }

}

gulp.task('prerun', function () {
    return Capsule.cleanDirectory();
});
gulp.task('build', function () {
    return Capsule.cleanDirectory()
        .then(() => streamToPromise(Capsule.bundler()))
        .then(() => streamToPromise(Capsule.compressor()))
        .then(() => streamToPromise(Capsule.stripper()));
});
