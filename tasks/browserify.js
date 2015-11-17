// npm i -D babelify browserify vinyl-source-stream babel-preset-es2015 babel-preset-react
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = function (gulp, options, plugins) {
	gulp.task('browserify', function () {
		var b = browserify({
			entries: ['app/index.js'],
			cache: {},
			packageCache: {},
			debug: true,
			fullPaths: true
		});

		b
			.transform(babelify.configure({
				presets: ['es2015', 'react']
			}))
			.bundle()
			.pipe(gulp.dest('app/build/'));
	});
};
