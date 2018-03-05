/**
 * @file build mag design components
 * @author dongshihao<dongshihao@baidu.com>
 */
'use strict';

const fs = require('fs');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const header = require('gulp-header');
const autoprefixer = require('autoprefixer-stylus');
const rimraf = require('gulp-rimraf');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const minimist = require('minimist');
const pkg = require('./package.json');

/**
 * 编译产出压缩文件头版权
 *
 * @type {string}
 */
const copyright = [
    '/*!',
    ' * Mag-Design v<%=pkg.version%>',
    ' * Copyright 2017-<%=year%> Baidu, Inc.',
    ' * Licensed under MIT (https://github.com/mipengine/mip-mag-design)',
    ' */',
    ''
].join('\n');

const runTimestamp = Math.round(Date.now() / 1000);
const options = minimist(process.argv.slice(2));
const paths = {
    srcBase: 'src/',
    baseFile: 'src/main.styl',
    src: 'src/**/*.styl',
    dist: 'dist',
    distModule: 'dist',
    demo: 'src/**/*.html',
    example: 'example',
    tools: 'tools/'
};

gulp.task('clean', function () {
    return gulp.src('dist/*', {
        read: false
    }).pipe(rimraf());
});

gulp.task('iconfont', ['clean'], function () {
    return gulp
        .src(['src/fonts/*'])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build', ['iconfont'], function () {
    return gulp.src(paths.baseFile)
        .pipe(sourcemaps.init())
        .pipe(stylus({
            'paths': ['./node_modules/', './node_modules/*/', './src/base/'],
            'import': ['variables', 'mixins'],
            'use': [
                autoprefixer({
                    browsers: ['iOS >= 8', 'ie >= 10', 'Android >= 4']
                })
            ],
            'include css': true
        }))
        .pipe(cleanCSS())
        .pipe(rename('mag-design.min.css'))
        .pipe(header(copyright, {
            pkg: pkg,
            year: new Date().getFullYear()
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist))
        .pipe(browserSync.stream());
});

gulp.task('preview', ['build'], function () {
    browserSync.init([paths.src, paths.demo], {
        server: {
            baseDir: './',
            directory: false,
            routes: {
                '/': paths.example
            }
        },
        open: false,
        port: 8888,
        cors: true
    });
    gulp.watch([paths.src], ['build']);
    gulp.watch([paths.example + '/**']).on('change', browserSync.reload);
});
