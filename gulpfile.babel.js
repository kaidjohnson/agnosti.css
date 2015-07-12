import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('serve', [], function () {
	var src = [
		'*.html',
		'*.css'
	];

	browserSync({
		nofify: false,
		port: 8000,
		server: './'
	});

	gulp.watch(src).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
