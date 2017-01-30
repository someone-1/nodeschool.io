/////////////////////////MY FIRST I/O/////////////////////////
var fs = require('fs');
var a = process.argv[2];
var str = fs.readFileSync(a,'utf8');
//var buf = fs.readFileSync(a);
//var str = buf.toString();
str = str.split('\n');
console.log(str.length-1);

