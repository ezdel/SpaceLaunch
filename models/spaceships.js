var orm = require('../config/orm.js');


var spaceships = {

	selectAll: function (cb) {
		orm.selectAll('spaceships', function (res) {
			cb(res);
		});
	},

	insertOne: function (cols, vals, cb) {
		orm.create('spaceships', cols, vals, function (res) {
			cb(res);
		});
	},

	updateOne: function (objColVals, condition, cd) {
		orm.update('spaceships', objColVals, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = spaceships;