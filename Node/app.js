var express = require('express');
var app = express();
var socket = require('socket.io');


app.use(express.static(__dirname + '/public'));

var server = app.listen(8080);
var io = socket.listen(server);

io.sockets.on('connection', function (socket) {
console.log("connnect");
socket.on('disconnect', function (socket) {
console.log("disconnect");
});
socket.emit("pong",{txt:"Connected to server",user:"You are"});
socket.on('ping', function (data) {
	console.log(data.txt + data.user);
	socket.broadcast.emit("pong",data);
});
});