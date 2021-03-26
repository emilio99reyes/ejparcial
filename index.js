var express = require('express');

var app = express();

var path = require('path');

app.listen('5000', function () {
  console.log('Servidor web funcionando y escuchando desde el puerto número 5000');
});

app.use(express.static(__dirname + '/public/'))