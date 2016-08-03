var express = require('express');

var app = express();

//Set view engine in express
app.set('view engine', 'pug');

//Set static file support
app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Dev Server escuchando en el puerto 3000');
})
