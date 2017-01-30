///////////////////////////////HTTP FILE SERVER/////////////////////
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req , res){
	res.writeHead(200,{"content-type":"text"});
	var streams = fs.createReadStream(process.argv[3]);
	streams.pipe(res) ;
})
server.listen(process.argv[2]);

