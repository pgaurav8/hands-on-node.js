var client = require('dgram').createSocket('udp4');

var msg = new Buffer(' Ping from Client 1 !! ');

client.send(msg, 0, msg.length, 4004, function(err){
    if(err)
        throw err;

    console.log('\n Message Sent Successfully !! \n Be Happy \n')
})

client.on('message', function(msg, rinfo){
    console.log('\n Message From server : ' + msg);
    console.log('\n');
})