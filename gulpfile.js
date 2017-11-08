/**
 * @file build mag design components
 * @author dongshihao<dongshihao@baidu.com>
 */
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const rimraf = require('gulp-rimraf');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const minimist = require('minimist');

/*************************************************************************************************************************************/

let paths = {
  srcBase: 'src/',
  baseFile: 'src/base/main.styl',
	src: 'src/**/*.styl',
	dist: 'dist',
	distModule: 'dist',
	demo: 'src/**/*.html',
	example: 'example'
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

let options = minimist(process.argv.slice(2));
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
