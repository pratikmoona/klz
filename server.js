var express = require('express');
var path = require('path');

var app = express();

require('./routes')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
	console.log("Starting on port 3000");
});
