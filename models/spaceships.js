var orm = require('../config/orm.js');


var spaceship = {

	selectAll: function (cb) {
		orm.selectAll('spaceships', function (res) {
			cb(res);
		});
	},

	insertOne: function (cols, vals, cb) {
		orm.insertOne('spaceships', cols, vals, function (res) {
			cb(res);
		});
	},

	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('spaceships', objColVals, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = spaceship;