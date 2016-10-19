// modules are independent of each other so we do need to call express here as well.
// our module requires express + express.router
var express = require('express');
var ctrl	= express.Router();

ctrl.get('/', function(req, res, next) {
	res.render('index', {
		message: 'It is Russell\'s Birthday'
	});
});

ctrl.get('/home', function(req,res,next) {
	res.render('hello', {
		name: 'Jen',
		adjective: 'funny',
		framework: 'express.js'
	});
});

// export controller
module.exports = ctrl;