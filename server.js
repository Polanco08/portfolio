var express = require('express');

var app = express();

//Set view engine in express
app.set('view engine', 'pug');

//Set static file support
//---------------------------------------------------------
app.use('/static', express.static('public'));


// Rutas de la aplicación
//---------------------------------------------------------
app.get('/', function (req, res) {
  res.render('index', { title: 'gpolanco.com' });
})

app.get('/sobremi', function (req, res) {
  res.render('index', { title: 'gpolanco.com - Sobre mi.' });
})

app.get('/contacto', function (req, res) {
  res.render('index', { title: 'gpolanco.com - Contacto.' });
})

app.get('/habilidades', function (req, res) {
  res.render('index', { title: 'gpolanco.com - Habilidades.' });
})

app.get('/portfolio', function (req, res) {
  res.render('index', { title: 'gpolanco.com - Mis trabajos.' });
})

// Definición del server
//---------------------------------------------------------
app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Dev Server escuchando en el puerto 3000');
})
