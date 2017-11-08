const gulp = require('gulp');
const stylus = require('gulp-stylus');
const rimraf = require('gulp-rimraf');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');

/*************************************************************************************************************************************/

let paths = {
	src: 'src/**/*.styl',
	dist: 'dist',
	distModule: 'dist/css',
	demo: '',
	baseDir: 'example'
};

gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(rimraf());
});

gulp.task('build-min', ['clean'], function () {
    return gulp.src(paths.src)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(cleanCSS())
        .pipe(concat('mag-design.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist))
        .pipe(gulp.dest(paths.baseDir));
});

gulp.task('build-module-css', ['clean'], function () {
    return gulp.src(paths.src)
        .pipe(stylus())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.distModule));
});

gulp.task('build', ['build-module-css', 'build-min']);



gulp.task('preview', ['build'], function () {
   browserSync.init([paths.src, paths.demo], {
      server: {
         baseDir: paths.baseDir
      }
   });
});