var express = require('express');
var router = express.Router();
var spaceships = require('../models/spaceships.js');


router.get('/', function (req, res) {
	res.redirect('/spaceships');
});

router.get('/spaceships', function (req, res) {
	spaceships.selectAll(function (data) {
		console.log(data);
		var spaceshipObject = { ships: data };
		console.log(spaceshipObject);
		res.render('index', spaceshipObject);
	});
});

router.post('/spaceships/create', function (req, res) {
	cat.create(['passengers'], [req.body.passengers], function () {
		res.redirect('/spaceships');
	});
});

module.exports = router;