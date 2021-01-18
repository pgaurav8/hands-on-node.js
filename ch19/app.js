console.log('\n\nModule 1 : \n\n')
var module1 = require('./module1');
module1();

console.log('\n\nModule 2 : \n\n')
var module2 = require('./module2');
module2.functionA();
module2.functionA();
module2.functionB();

console.log('\n\nModule 3 : \n\n')
var Line = require('./module3');
var line = Line.create(2,4,10,15);
console.log('This line passing from points ('+line.x1 + ','+line.y1+') and ('+line.x2 + ','+line.y2+') length is ' + line.length());