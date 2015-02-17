
//http is a module provided by the core node library
var http = require('http'),
    express = require('express'),

//run the express server framework
    app	 = express();

//Node server with express framework
//name this "server" which creates an HTTP server using the app express framework
var server = http.Server(app);

//bring in socket.io and have it listen to my server//
var io = require('socket.io')(server);

// '/'=root
//create a server that is asynchronous
//app.get is an instance of express (app as a big object); this is how you set routes

/////////ROUTING/////////////////

app.get('/', function(request, response){
	console.log(__dirname);
	response.sendFile(__dirname + '/index.html'); // response is sent to user, connecting a client-side socket
});



///////SOCKET.IO/////////
io.on('connection', function(socket){

	console.log('socket is connected');

	socket.on('message', function(m){
		console.log('message: ' + m);
	
	io.emit('chat', m);
	});
});

server.listen(3000);

console.log("Server is running"); 














// var server = http.createServer(function(request, response){
// 	response.end(JSON.stringify({name:"Eric"}));

// });

// server.listen(9000);
// console.log("Server is running");