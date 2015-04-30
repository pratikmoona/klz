var express = require('express');
var path = require('path');
var db = require('./db');

var app = express();

db.connection.connect(function(err) {
	if(!err) {
		console.log("Success\n\n");
	}
	else {
		console.log("Error\n\n");
	}
});

db.connection.query('SELECT * from users', function(err, rows) {
	db.connection.end();
	if(!err)
		console.log(rows);
});

require('./routes')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
	console.log("Starting on port 3000");
});
