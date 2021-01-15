const { Socket } = require('dgram');

var server = require('dgram').createSocket('udp4');


server.on('listening', function(){
    console.log('Server Listening !!');
})

server.on('message',function(msg, rinfo){
    console.log('Message Received : ' + msg );
    
    console.log('From Address:Port  =  ' + rinfo.address+':'+rinfo.port);
    
    server.send(msg,0,msg.length,rinfo.port, rinfo.address, function(err){
        if(err)
            throw err;
    
        console.log('Message reverted back to origin socket');
    } )
})




server.bind(4004);