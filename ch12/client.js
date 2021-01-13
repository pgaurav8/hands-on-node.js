var net = require('net');
var port = 4001;
var host = 'localhost';
var conn = net.createConnection(port, host);


conn.on('data', function(data) {
    console.log('some data has arrived')
    console.log(data.toString());
});

conn.write('some string over to you!');

conn.destroy();

conn.on('close', function() {
    console.log('connection closed');
});

