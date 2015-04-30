module.exports = function(app) {
	app.get('/user', function(req, res) {
		res.render('profile.html');
	});
	app.get('/user/profile', function(req, res) {
		res.render('profile.html');
	});
	app.get('/user/manage', function(req, res) {
		res.render('manage.html');
	});
}
