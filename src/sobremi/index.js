var page      = require('page');
var empty     = require('empty-element');
var template  = require('./template');
var title = require('title');

page('/sobre-mi', function(ctx, next){
  title('gpolanco.com - Sobre mi.');
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
