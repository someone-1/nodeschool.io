/////////////////////////////////HTTP CLIENT//////////////////////////
var http = require('http');
var ur = process.argv[2];

http.get(ur , function(response){
	response.setEncoding('utf8')
	response.on("data" , function(data){
		//data = data.toString();
		console.log(data)
	})
	response.on('error',function(error){
		//do
		//things
		console.log(error);
	})
})
