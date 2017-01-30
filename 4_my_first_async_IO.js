/////////////////////////////////// MY FIRST ASYNC I/O!/////////////
var fs = require('fs');
var a = process.argv[2];
fs.readFile(a,'utf8',function(err,data){
	if(err){
		return console.log(err);
	}
	else{
		data = data.split('\n').length-1;
		console.log(data);
	}
});
