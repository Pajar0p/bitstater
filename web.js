var express = require('express');
var fs = require('fs');

var data = fs.readFileSync("index.html","utf-8");

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
        response.send(data);

});

app.get('/webentrete',function(request, response) {
         response.send(fs.readFileSync('./Webpagev2/index.html').toString());
});



var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/bootstrap'));
app.listen(port, function() {
  console.log("Listening on " + port);
});
