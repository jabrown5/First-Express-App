// var express = require("express");
// var path 	= require("path");
// var app		= express();
// var port 	= 3000;

// // set public, views, and handlebars
// app.use(express.static(__dirname + '/public'));
// app.set('views', path.join(__dirname, '/views'));
// app.set('view engine', 'hbs');

// // require our controllers
// var homeCtrl = require('./controllers/home');  // or homeController
// var playgroundCtrl = require('./controllers/playground');
// var userCtrl = require('./controllers/user');

// // then we map '/' routes to the controllers
// app.use('/', homeCtrl);
// app.use('/play', playgroundCtrl);
// app.use('/users', userCtrl);

// app.listen(process.env.PORT || port);
// console.log("server has started");



// ********************
// WDI7 server practice
var express = require("express");
var path 	= require("path");
// app is the object we return everytime we invoke express
var app		= express();
// http (below) is already a part of node
var server = require('http').createServer(app);
var hbs = require('hbs');


// telling express that our views are in ./views
app.set('views', path.join(__dirname, 'views'));
// telling epxress that we are using handlebars
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname + '/public')));


app.get('/', function(request, response) {
	response.render('home',{name:"Jen", loggedIn: true, friends:['kirby','benny','lewis']});
})


// app.get('/', function(request, response, next) {
// 	// request obj is from the client
// 	// the response is what we are sending back
// 	response.send('Hey, i just built a server')
// })

// app.get('/cats', function(request, response, next) {
// 	// request obj is from the client
// 	// the response is what we are sending back
// 	response.send('Cats run this server!')
// })

// 1st argument is the port #
server.listen(3000, function() {
	console.log('server is listening on port 3000')
})