var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');


// Compila los estilos de scss a .css
//---------------------------------------------
gulp.task('estilos', function () {
  gulp
    .src('./src/index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
})

// Genera la carpeta public y su contenido
//---------------------------------------------
gulp.task('assets', function() {
  gulp
    .src('assets/**/*')
    .pipe(gulp.dest('public'));
})


// Tareas registradas
//----------------------------------------------
gulp.task('default', ['estilos', 'assets'])
