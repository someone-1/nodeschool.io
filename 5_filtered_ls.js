/////////////////////////////FILTERED LS////////////////////////////
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.'+process.argv[3];
fs.readdir(dir,function(err,data){
	if(err){
		return console.log(err);
	}
	else{
		for(i in data){
			var temp = data[i];
			if(path.extname(temp)===ext)
				console.log(temp);
		}
	}
});
