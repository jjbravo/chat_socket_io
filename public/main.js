var socket=io.connect('http://localhost:8080',{'forceNew':true});
/*socket.on('messages',function(data){
	console.log(data);
});
*/
function render(data){
	var html=data.map(function(elem,index){
		return('<div><strong>'+elem.author+'</strong>: <em>'+elem.text+'</em></div>')
	}).join(" ");
	document.getElementById('messages').innerHTML=html;
}

function addMessage(e){
	//console.log(document.getElementById('username').value);
	var mensaje={
		author:document.getElementById('username').value,
		text:document.getElementById('texto').value
	};

	console.log(mensaje);
	socket.emit('messages',mensaje);
	return false;
}

socket.on('messages',function(data){
	render(data);
});