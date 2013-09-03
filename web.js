var express = require('express');
var fs = require('fs');

var data = fs.readFileSync("index.html","utf-8");

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
        response.send(data);

var webentrete = fs.readFileSync("./webentre.html","utf-8");

app.get('/webentrete', function(request, response) {
        response.send(webentrete);




});

var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/bootstrap'));
app.listen(port, function() {
  console.log("Listening on " + port);
});
