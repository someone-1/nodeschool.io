/////////////////////////////////MAKE IT MODULAR//////////////////////////
var filterfn = require('./module.js');
var dir = process.argv[2];
var ext = process.argv[3];
function callback(err, files){
	if(err)
		return console.log(err);
	for(i in files)
		console.log(files[i]);
}
filterfn(dir, ext, callback);
