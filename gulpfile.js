/*
|--------------------------------------------------------------------------
| Gulpfile
|--------------------------------------------------------------------------
*/

var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

// Browser Sync
var browserSync = require('browser-sync').create();

/*
|--------------------------------------------------------------------------
| Tarefas para Desenvolvimento
|--------------------------------------------------------------------------
*/

// Inicia o Browser Sync
gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});
});

// Sass
gulp.task('sass', function () {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Observa os arquivos
gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js' browserSync.reload);
});

// Default
gulp.task('default', function () {
	runSequence(['sass', 'browserSync', 'watch'],
		callback
	)
});

/*
|--------------------------------------------------------------------------
| Tarefas de Otimização
|--------------------------------------------------------------------------
*/

// Minifica CSS e JS
gulp.task('useref', function () {
	return gulp.src('*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
});

// Otimiza as Imagens
gulp.task('images', function () {
	return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('dist/images'));
});

// Copia as Fonts
gulp.task('fonts', function () {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

/*
|--------------------------------------------------------------------------
| Tarefas de Limpeza
|--------------------------------------------------------------------------
*/

// Clean dist folder
gulp.task('clean:dist', function () {
	return del.sync('dist');
});

// Clear Cache
gulp.task('cache:clear', function (callback) {
	return cache.clearAll(callback);
});

/*
|--------------------------------------------------------------------------
| Tarefa para Deploy
|--------------------------------------------------------------------------
*/

// Build
gulp.task('build', function (callback) {
	runSequence('clean:dist',
		['sass', 'useref', 'images', 'fonts'],
		callback
	)
});