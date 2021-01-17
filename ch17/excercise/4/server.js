var fs =require('fs');
var options = {
    key: fs.readFileSync('/home/parmar/temp/ch17/excercise/2/server-key.pem','utf-8'),
    cert: fs.readFileSync('/home/parmar/temp/ch17/excercise/2/server-cert.pem','utf-8'),
    ca: fs.readFileSync('/home/parmar/temp/ch17/excercise/1/private/cakey.pem','utf-8'),
    requestCert: true,
    rejectUnauthorized: true
};

require('tls').createServer(options, function(socket) {
    socket.on('data', function(data) {
        console.log(data.toString());
    });
    socket.pipe(socket);
}).listen(4001);