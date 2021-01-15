var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('listening',function(){
    console.log('Server listening on ' + server.address().address + ' : ' + server.address().port);
});

server.on('message',function(message, rinfo){
    console.log('Server got message : ' + message + ' from : ' + rinfo.address + ' : ' + rinfo.port);
});


server.bind(4000,'localhost');

