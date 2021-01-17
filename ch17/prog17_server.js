var tls = require('tls'),
fs = require('fs'),
port = 4000,
host = 'localhost',

options1 = {
    key : fs.readFileSync('/home/parmar/temp/ch17/my.pem'),
    cert : fs.readFileSync('/home/parmar/temp/ch17/my_cert.pem')
};

var server = tls.createServer(options1, function(s) {
    s.pipe(s);
    s.on('data', function(data){
        console.log(data);
    });
}).listen(4000);


