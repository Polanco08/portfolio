var page = require('page');
var main = document.getElementById("main-container");

page('/', function(ctx, next) {
  main.innerHTML = "Main page <a href='/sobremi'>Sobre mi</a>";
})

page('/sobremi', function(ctx, next) {
  main.innerHTML = "Sobre mi page <a href='/'>Home</a>";
})


page();
