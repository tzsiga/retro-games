var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
app.set('port', process.env.PORT || 3000);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var server = http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});

var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, './public')));