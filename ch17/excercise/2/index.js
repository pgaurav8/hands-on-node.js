var fs = require('fs');
var options = {
    key: fs.readFileSync('/home/parmar/temp/ch17/excercise/2/server-key.pem'),
    cert: fs.readFileSync('/home/parmar/temp/ch17/excercise/2/server-cert.pem'),
    ca: fs.readFileSync('/home/parmar/temp/ch17/excercise/1/private/cakey.pem')
};

require('tls').createServer(options, function(socket) {
    socket.pipe(socket);
}).listen(4001);