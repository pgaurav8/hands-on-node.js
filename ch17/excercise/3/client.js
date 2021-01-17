var fs = require('fs');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

var client = require('tls').connect(4001, function(err) {
    client.connected = true;
    console.log('connected');
    process.stdin.resume();
    process.stdin.pipe(client);
    client.pipe(process.stdout, {end: false});
});