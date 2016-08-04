var gulp        = require('gulp');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var babel       = require('babelify');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var watchify    = require('watchify');


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
function compile(watch) {
  var bundle = watchify(browserify('./src/index.js'));

  function rebundle() {
    bundle
      .transform(babel)
      .bundle()
      .on('error', function (err) { console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }

  if (watch) {
    bundle.on('update', function () {
      console.log('--> Bundling...');
      rebundle();
    });
  }

  rebundle();
}

gulp.task('build', function () {  return compile(); });
gulp.task('watch', function () { return compile(true); });


// Tareas registradas
//----------------------------------------------
gulp.task('default', ['estilos', 'assets', 'build'])
