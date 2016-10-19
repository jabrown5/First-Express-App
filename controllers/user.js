var express = require('express');
var ctrl = express.Router();

var users = [
	{
		username: 'name name2',
		password: 'passwd!!'
	},
	{
		username: 'name name3',
		password: 'passwd22222!!'
	},
	{
		username: 'name name3',
		password: 'passwd333!!'
	}
]
ctrl.get('/', function(req, res, next) {
	res.json(users);
});


module.exports = ctrl;