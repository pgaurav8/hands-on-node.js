var dgram = require('dgram');

var client = dgram.createSocket('udp4');

var msg = new Buffer('Hi from Gaurav');

client.send(msg ,0, msg.length , 4000 , 'localhost', function(err){
    if(err)
        throw err;
    
    console.log(' UDP Message Sent');
    client.close();
})