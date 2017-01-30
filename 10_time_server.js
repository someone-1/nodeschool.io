///////////////////////////////TIME SERVER///////////////////////////////////////
var net = require('net');

function append(val){
	if(val<10)
		return ('0'+val);
	else
		return val;
}
var server = net.createServer(function(socket){
	console.log('client connected');
	var date = new Date();
	date = date.getFullYear() + '-' + append(date.getMonth()+1) + '-' + append(date.getDate()) + ' ' + append(date.getHours())+ ':' + append(date.getMinutes());
	socket.write(date);
	socket.end("\n");

	console.log('');
}).on('error', function(err){
	return console.log(err);
})
server.listen(process.argv[2]);
