var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');

gulp.task('estilos', function () {
  gulp
    .src('./src/index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
})

gulp.task('default', ['estilos'])
