module.exports = function(app) {
	app.get('/browse', function(req, res) {
		res.render('browse.html');
	});
}
