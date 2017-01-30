/////////////////////JUGGLING ASYNC////////////////////
var http = require('http');
var a = process.argv;
var i = 1;
next();
function juggle(url,i){
	var line = '';
	http.get(url , function(response){
		response.on('data' , function(data){
			line+=data;
		})
		response.on('error' , function(err){
			console.log(err);
		})
		response.on('end' , function(){
			console.log(line);
			next();
		})
	})
}
function next(){
	i+=1;
	if(i<a.length){
		juggle(a[i] , i);
	}
}
