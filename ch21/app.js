var sum = require('./module1');

console.log('Sum of 13 and -21 is : ' + sum(13,(-21)) + '  /-');

var mod2 = require('./module2');

console.log(' \n\nTesting Asynchronously : \n\n' + mod2.testAsync())