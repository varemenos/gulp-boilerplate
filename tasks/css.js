var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

module.exports = function (gulp) {
    'use strict';

    gulp.task('css', function () {
        var processors = [
            autoprefixer()
        ];

        return gulp.src('scss/**/*.scss')
            .pipe(sass())
            .pipe(postcss(processors))
            .pipe(gulp.dest('./dest'));
    });
};
