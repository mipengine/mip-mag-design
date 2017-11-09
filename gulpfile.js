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

/*************************************************************************************************************************************/

let options = minimist(process.argv.slice(2));

let paths = {
  srcBase: 'src/',
  baseFile: 'src/base/main.styl',
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

gulp.task('build-min', ['clean'], function () {
    return gulp.src(paths.baseFile)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(cleanCSS())
        .pipe(rename('mag-design.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('build-module', ['clean'], function () {
    return gulp.src(paths.src)
        .pipe(stylus())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.distModule));
});

// 将src中的demo拷贝到dist下
gulp.task('build-demo', ['clean'], function () {
    return gulp.src(paths.demo)
        .pipe(gulp.dest(paths.distModule));
});

gulp.task('build', ['build-module', 'build-min', 'build-demo']);

gulp.task('preview', ['build'], function () {
  browserSync.init([paths.src, paths.demo], {
    server: {
      baseDir: './',
      directory: false,
      routes: {
        "/": options.cp === true ? paths.example : paths.srcBase + options.cp
      }
    }
  });
});

gulp.task('creat', function () {
    let cp = options.cp;
    let cpPath = cp === true ? '' : paths.srcBase + cp;

    if (!cpPath) {
      console.warn('请填写组件名称!');
      return;
    }


    if (fs.existsSync(cpPath)) {
      console.warn('组件已存在!');
      return;
    }

    fs.mkdir(cpPath);

    gulp.src([paths.tools + 'index.html', paths.tools + 'READEME.md']).pipe(gulp.dest(cpPath));
    gulp.src(paths.tools + 'demo.styl').pipe(rename(cp + '.styl')).pipe(gulp.dest(cpPath));

    console.log('创建组件：' + cp);

});

// 集成测试
gulp.task('test', function () {
   console.log('集成测试待建设...');
});