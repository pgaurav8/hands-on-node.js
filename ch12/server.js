require('net').createServer(function(socket){
    // New Connection 
    socket.on('data', function(data){
        console.log(data.toString());
    });

    socket.on('end', function(data){
        console.log(data);
    });

    //flushed = socket.write('453d9ea499aa8247a54c951', 'base64');

    socket.write('Message from Gaurav');

    socket.setTimeout(60000, function() {
        socket.end('idle timeout, disconnecting, bye!');
    });

}).listen(4001);

