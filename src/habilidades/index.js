var page      = require('page');
var empty     = require('empty-element');
var template  = require('./template');
var title     = require('title');

page('/habilidades', function(ctx, next){
  title('gpolanco.com - Habilidades.');
  var main = document.getElementById("main-container");
  empty(main).appendChild(template);
})
