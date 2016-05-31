var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var del 		= require('del');
var vinylPaths  = require('vinyl-paths');
var tsc = require('gulp-typescript');

gulp.task('hello', function()
{
	console.log('Waaazzuuuuuppp');
});

gulp.task('copyIndex', function()
{
	return gulp.src('src/index.html')
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function()
{
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});


gulp.task('ts-compile', function() {
	return gulp.src('src/**/*.ts')
				.pipe(tsc())
				.pipe(gulp.dest('./build'))
				.pipe(browserSync.reload({stream: true}));

});

gulp.task('watchFiles', function()
{
	gulp.watch('src/index.html', ['copyIndex']);
	gulp.watch('src/**/*.ts', ['ts-compile']);
});

gulp.task('default', ['copyIndex', 'browserSync', 'watchFiles','ts-compile']);
