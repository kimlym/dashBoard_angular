var gulp = require('gulp');

// Include Our Plugins
var changed = require('changed');
var del = require('del');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');

function onError(err) {
    console.log(err);
};

gulp.task('sass', function(){
    return gulp.src('app/assets/sass/*.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('app/assets/styles/'))
        .pipe(plumber({
            errorHandler: onError
        }))
});

gulp.task('imagemin', function(){
    return gulp.src('app/assets/images/src/*/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/assets/images/build/'))
});

gulp.task('clean', function () {
  return del([
    'app/assets/images/build'
  ]);
});

gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/assets/images/src/**/*', ['imagemin']);
    gulp.watch('app/assets/images/build', ['clean']);
    gulp.watch('app/assets/sass/*.scss', ['sass']);
    gulp.watch('app/scripts/**/*', ['jshint']);
});


// Default Task
gulp.task('default', ['sass','imagemin','clean','jshint','watch']);
