var net = require('net');

 if (process.argv.length < 4) {
 console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' ');
 return;
 }

 var host = process.argv[2],
 port = process.argv[3];

 var conn = net.createConnection(port, host);

process.stdin.resume();
process.stdin.pipe(conn);
onn.pipe(process.stdout, {end: false});