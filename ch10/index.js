var http = require('http');

var util = require('util');
// Creating Server

// Server 1 on 4000

var server1 = http.createServer();
server1.on('request', function(req, res){

    // One Header
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    
    // req.url implementation
    res.end(req.url);
});
server1.listen(4000);

// Server 2 on 4001
var server2 = http.createServer();
server2.on('request', function(req, res){

    // Two Header
    res.writeHead(200, {'Content-Type' : 'text/plain' , 'Cache-Control': 'max-age=3600'});

    // to print on page
    res.write('Hello from Gaurav Parmar \n\n');
    
    // req.url implementation
    res.end(req.url);
});

server2.listen(4001);

// Server 3 on 4002
var server3 = http.createServer();
server3.on('request', function(req, res){

    // Two Header
    res.writeHead(200, {'Content-Type' : 'text/plain' , 'Cache-Control': 'max-age=3600'});

    // to print on page
    res.write('Hello from Gaurav Parmar \n\n');
    
    // req.method, req.headers implementation
    res.end(util.inspect(req.headers));

});
server3.listen(4002);

// Server 4 on 4003
var server4 = http.createServer();
server4.on('request', function(req, res){
    // Two Header
    res.writeHead(200, {'Content-Type' : 'text/plain' , 'Cache-Control': 'max-age=3600'});

    // to print on page
    res.write('Hello from Gaurav Parmar \n\n');
    
    res.end('Bye From Gaurav');
});
server4.listen(4003);


// HttP Client  : http.get() implementation
var options1 = {
    host: 'www.google.com',
    port: 80,
    path: '/index.html'
};
http.get(options1, function(res) {
    console.log('got response: ' + res.statusCode);
}).on('error', function(err) {
    console.log('got error: ' + err.message)
});

// Http Client : http.request() implementation
var options2 = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};

var req2 = http.request(options2, function(res){
    console.log('STATUS : ' + res.statusCode);
    console.log('HEADERS : ' + JSON.stringify(res.headers));
    res.setEncoding('utf-8');
    res.on('data', function(chunk){
        console.log('BODY : ' + chunk);
    });
});

req2.write("data \n");
req2.write("data \n");
req2.end();



// Excercise 1 
var fs11 = require('fs');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var server11 = http.createServer();
server11.on('request', function(req, res){

    // One Header
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    
    // req.url implementation
    res.end(fs11.readFileSync(__dirname + req.url));
});
server11.listen(4011);


// Excercise 2
var server12 = http.createServer();
server12.on('request', function(req, res){

    // One Header
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    var left=0;
    setInterval(function(){
        for(var i=0;i<100;i++){
            res.write(Date.now() + '\n');
        }
        if(--left===0){
            clearInterval();
            res.end();
        }
    }, 1000 );
    // req.url implementation
    
});
server12.listen(4111);

// Excercise 3
var fs = require('fs');
var req3 = http.request(options2, function(res){
    res.setEncoding('utf-8');
    res.on('data', function(chunk){
        fs.open('/home/parmar/temp/ch10/test.txt', 'a', function(err, fd){
            var writeBuffer = new Buffer((chunk));
        
            fs.write(fd, writeBuffer, 0, writeBuffer.length, null, function(err, writeBytes){
                if(err)
                    throw err;
        
                console.log(' Written ' + writeBytes + ' Bytes');
            });
        });
    });
});

req3.write('data \n');
req3.end();

// Excercise 4
if (process.argv.length < 5) {
    console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' ');
    return;
}

var options3 = {
    host: process.argv[2],
    port: parseInt(process.argv[3], 10),
    path: '/',
    method: 'PUT' 
}

var req4 = http.request(options3);
console.log('piping ' + process.argv[4]);
fs.createReadStream(process.argv[4]).pipe(req4);