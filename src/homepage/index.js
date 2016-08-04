var page      = require('page');
var empty     = require('empty-element');
var template  = require('./template');
var title     = require('title');

// Home page
//---------------------------------------------------------
page('/', function(ctx, next) {
  title('gpolanco.com');
  var main = document.getElementById("main-container");
  empty(main).appendChild(template);
})
