var electron = require('electron-connect').server.create();
var changed = require('gulp-changed');

module.exports = function (gulp, options, plugins) {
	gulp.task('serve', function () {
		electron.start();

		// Restart browser process
		gulp.watch('build.js', electron.restart);

		// Reload renderer process
		gulp.watch([
			'app/index.html',
			'app/build/**/*.js'
		], electron.reload);
	});
};
