import fs from 'fs';
import del from 'del';
import gulp from 'gulp';
import stripDebug from 'gulp-strip-debug';
import stripComments from 'gulp-strip-comments';

import {EnvOptions, releasePath} from './webpack.config';

// @types typeof import('./package.json');
interface PackageManifest {
    name: string;
    version: string;
}

export class ProjectD {

    static get gitHash() {
        const head = fs.readFileSync('./.git/HEAD', {encoding: 'utf8'});
        const m = /^ref:\s*(.*)/.exec(head);
        const defHash = '00000000';
        if (m) {
            const path = './.git/' + m[1];
            const head = fs.readFileSync(path, {encoding: 'utf8'});
            return head && head.substring(0, 8) || defHash;
        } else {
            return head && head.substring(0, 8) || defHash;
        }
    }

    static get manifest(): PackageManifest {
        const text = fs.readFileSync('./package.json', {encoding: 'utf8'});
        return JSON.parse(text);
    }

    static cleanDirectory(env: EnvOptions) {
        return del.sync([
            'dist/webpack/**/*',
            'dist/release/**/*',
        ]);
    }

    static releaseHander(env: EnvOptions, globs: string | string[]) {
        if (env.mode === 'production') {
            gulp.src(globs).pipe(stripDebug())
                .pipe(stripComments())
                .pipe(gulp.dest(releasePath));
        }
    }

}
