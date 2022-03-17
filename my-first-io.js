const fs = require('fs');

var readme= fs.readFileSync('./text.txt','utf8');
console.log(readme)
