//import fs from 'fs';

let fs = require('fs');
/*fs.readFile('/home/rieau/dev/maserati/maserati.html', 'utf-8', function(error, data) {
    console.log(data);
});*/
let hello = require('./deuxieme');
hello();
//console.log(fs);
console.log('blip');
let test = require('./database');
test();