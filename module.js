// var fs = require('fs');
// var path = require('path');

// module.exports = filterfn;

// function filterfn (dir, ext, callback) {
// 	fs.readdir(dir, function (err, data) {
// 		if(err)
// 			return callback(err);
// 		var files=[];
// 		for(i in data){
// 			var temp = data[i];
// 			if(path.extname(temp)==='.'+ext)
// 				files.push(temp);
// 		}
// 		callback(null,files);
// 	})
// }

