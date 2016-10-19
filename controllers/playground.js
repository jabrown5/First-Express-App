var express	= require('express');
var ctrl	= express.Router();

var data = [
	{
		name: 'Cedar Point',
		location: 'Ohio',
		notes: 'big roller coasters'
	},
	{
		name: 'Six Flags',
		location: 'Illinois',
		notes: 'smaller than Cedar Point'

	},
	{
		name: "Michigan's Adventure",
		location: 'Michigan',
		notes: 'pretty small'
	}
];

// build our first API
ctrl.get('/', function(req, res, next) {
	res.json(data);
});

ctrl.get('/1', function(req,res,next) {
	res.json(data[0]);
});
ctrl.get('/2', function(req,res,next) {
	res.json(data[1]);
});
ctrl.get('/3', function(req,res,next) {
	res.json(data[2]);
});


module.exports = ctrl ;