var util = require('util'),EventEmitter = require('events').EventEmitter;


// TCP Server part 
var Hose = function() {
    var self = this;
    require('net').createServer(function(socket) {
        socket.on('data', function(data) {
            self.emit('data', data);
        })
    }).listen(4001);
};

util.inherits(Hose, EventEmitter);

// Calling Host using tcp part !!
var hoser = new Hose();


// HTTP Server

require('http').createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    hoser.on('data', function(data) {
        console.log(data);
        res.write(data);
    });
}).listen(4002);