var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

module.exports = function (gulp) {
    'use strict';

    gulp.task('cssmin', ['css'], function () {
        return gulp
            .src([
                'libs/lib1.css',
                'libs2/lib2.css'
                'build/style.css'
            ])
            .pipe(concat('result.css'))
            .pipe(cssmin({
                advanced: false,
                aggressiveMerging: false,
                keepSpecialComments: false
            }))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('build'));
    });
};
