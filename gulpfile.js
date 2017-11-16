/**
 * @file build mag design components
 * @author dongshihao<dongshihao@baidu.com>
 */
'use strict';

const fs = require('fs');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const rimraf = require('gulp-rimraf');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const minimist = require('minimist');

let options = minimist(process.argv.slice(2));

let paths = {
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
  return gulp.src('dist/*', {read: false})
    .pipe(rimraf());
});

gulp.task('build', ['clean'], function () {
  return gulp.src(paths.baseFile)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      paths:[ './node_modules/', './node_modules/*/', './src/base/' ],
      'include css': true
    }))
    .pipe(cleanCSS())
    .pipe(rename('mag-design.min.css'))
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
        "/": paths.example
      }
    }
  });
  gulp.watch([paths.src], ['build']);
  gulp.watch([paths.example + '/**']).on("change", browserSync.reload);
});
