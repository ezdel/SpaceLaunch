var express = require('express');
var router = express.Router();
var spaceship = require('../models/spaceships.js');


router.get('/', function (req, res) {
	res.redirect('/spaceships');
});

router.get('/spaceships', function (req, res) {
	spaceship.selectAll(function (data) {
		console.log(data);
		var spaceshipObject = { ships: data };
		console.log(spaceshipObject);
		res.render('index', spaceshipObject);
	});
});

router.post('/spaceships/create', function (req, res) {
	console.log(req.body.passengers);
	spaceship.insertOne(['passengers', 'launched'], [req.body.passengers, 'false'], function () {
		res.redirect('/spaceships');
	});
});

router.put('/spaceships/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	spaceship.updateOne({ launched: req.body.launched }, condition, function () {
		res.redirect('/spaceships');
	});
});

router.delete('/spaceships/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	spaceship.delete(condition, function () {
		res.redirect('/spaceships');
	});
});

module.exports = router;