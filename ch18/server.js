var https = require('https') , fs = require('fs');

var options = {
    key : fs.readFileSync('myprivatekey.pem'),
    cert : fs.readFileSync('my_cert.pem')
};

https.createServer(options, function(req, res){
    res.writeHead(200, { 'Content-Type' : 'text/plain'});
    res.end('Hello from Gaurav !! ');
}).listen(4005);