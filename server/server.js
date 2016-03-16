var express=require('express');
var app=express();
app.use(express.static('public'));
var server=require('http').Server(app);
var io = require('socket.io')(server);

var messages=[
	{
		author:"Carlos",
		text:"Hola que tal"
	},
	{
		author:"Andres",
		text:"Como estas?"
	},
	{
		author:"Jhon",
		text:"Como va socket.io?"
	}
];

io.on('connection',function(socket){
	console.log('Un cliente se ha conectado');
	socket.emit('messages',messages);

	socket.on('messages',function(data){
	console.log(data);
	messages.push(data);
	io.sockets.emit('messages',messages);
})
});


/*
app.get('/',function(req,res){
	res.send('<h2>Hola Socket IO</h2>');
});
*/
server.listen(8080,function(){
	console.log('Listening in http://localhost:8080');
});
