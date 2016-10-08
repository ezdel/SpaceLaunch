var express = require('express');
var router = express.Router();
var spaceship = require('../models/spaceships.js');


router.get('/', function (req, res) {
	res.redirect('/spaceships');
});

router.get('/spaceships', function (req, res) {
	spaceship.selectAll(function (data) {
		var spaceshipObject = { ships: data };
		res.render('index', spaceshipObject);
	});
});

router.post('/spaceships/create', function (req, res) {
	spaceship.insertOne('passengers', req.body.passengers, function () {
		res.redirect('/spaceships');
	});
});

router.put('/spaceships/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

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