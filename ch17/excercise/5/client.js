var fs = require('fs');
var options = {
    key: fs.readFileSync('/home/parmar/temp/ch17/excercise/1/client1/client.pem', 'utf-8'),
    cert: fs.readFileSync('/home/parmar/temp/ch17/excercise/1/client1/client_cert.pem','utf-8')
};

var client = require('tls').connect(4001, options, function(err) {
    client.connected = true;
    console.log('connected');
    process.stdin.resume();
    process.stdin.pipe(client);
    client.pipe(process.stdout, {end: false});
});