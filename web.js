var express = require('express');
var fs = require('fs');

var data = fs.readFileSync("index.html","utf-8");

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
        response.send(data);

});

app.get('/webentrete',function(request, response) {
         response.send(fs.readFileSync('./webentrete.html').toString());
});

app.use(express.static(__dirname + '/img'));

var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/bootstrap'));
app.listen(port, function() {
  console.log("Listening on " + port);
});
