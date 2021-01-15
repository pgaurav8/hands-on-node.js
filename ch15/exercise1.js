// Server part

var spawn = require('child_process').spawn;

require('fs').open(__dirname + '/example.txt', 'a', function(err, fileDesc)
{
    var server = require('net').createServer(function(socket) {
        socket.write('Here you go', fileDesc);
        socket.end();
        server.close();
    });

    server.listen('/home/parmar/wfh/ch15/exc.sock', function() {
        var child = spawn(process.argv[0], [__dirname + '/client.js']);
        child.on('exit', function() {
            console.log('child exited');
        });
    });
});

// Client part

var fs = require('fs');

var conn = require('net').createConnection('/home/parmar/wfh/ch15/exc.sock');
conn.on('fd', function(fileDesc) {
    fs.write(fileDesc, "this is the child!\n", function() {
        conn.end();
    });
});