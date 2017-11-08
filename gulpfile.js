const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const rimraf = require('gulp-rimraf');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat'); 

/*************************************************************************************************************************************/

let cleanCSSOptions = function () {
    return cleanCSS({
        format: {
            breaks: {
                afterAtRule: true,
                afterBlockBegins: true,
                afterBlockEnds: true,
                afterComment: true,
                afterProperty: true,
                afterRuleBegins: true,
                afterRuleEnds: true,
                beforeBlockEnds: true,
                betweenSelectors: true
            },
            indentBy: 4,
            indentWith: 'space',
            spaces: {
                aroundSelectorRelation: true,
                beforeBlockBegins: true,
                beforeValue: true
            },
            wrapAt: false
        }
    });
};

gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(rimraf());
});

gulp.task('build-min', ['clean'], function () {
    return gulp.src('src/**/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(cleanCSSOptions())
        .pipe(concat('mag-design.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-module-css', ['clean'], function () {
    return gulp.src('src/**/*.styl')
        .pipe(stylus())
        .pipe(cleanCSSOptions())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['build-module-css', 'build-min']);

