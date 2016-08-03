var gulp        = require('gulp');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


// Compila los estilos de scss a .css
//---------------------------------------------
gulp.task('estilos', function () {
  gulp
    .src('./src/index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public/css'));
})


// Genera la carpeta public y su contenido
//---------------------------------------------
gulp.task('assets', function() {
  gulp
    .src('assets/**/*')
    .pipe(gulp.dest('public'));
})


// Procesa nuestros archivos javascripts
//---------------------------------------------
gulp.task('scripts', function(){
  browserify('./src/index.js')
    .transform(babel) // convierte mi código ECMAScript 6 a ECMAScript 5
    .bundle()// Generame un bundle
    .pipe(source('index.js')) // transforma lo devuelto por browserify a un formato entendido por gulp para seguir procesando
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
})


// Tareas registradas
//----------------------------------------------
gulp.task('default', ['estilos', 'assets', 'scripts'])
