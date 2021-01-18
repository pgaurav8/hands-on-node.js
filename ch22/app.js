require('http').createServer(function(req, res) {
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(data) {
    body += data;
    });
    req.on('end', function() {
        var number = parseInt(body, 10);
        var squared = Math.pow(number, 2);
        res.end(squared.toString());
    });
}).listen(4001);

var async = require('async');
var request = require('request');
var collection = [1, 2, 3, 4];

function iterator1(element, next) {
    request({ uri: 'http://localhost:4001/',
    body: element.toString() },
    function(err, res, body) {
        console.log('square of %d is %d', element, body);
        next(err);
    });
}
function callback1() {
    console.log('finished');
}
async.forEach(collection, iterator1, callback1);

function iterator2(element, next) {
    request({ uri: 'http://localhost:4001/',
    body: element.toString() },
    function(err, res, body) {
    next(err, parseInt(body, 10));
    });
}
function callback2(err, result) {
    console.log('finished.');
    for (var i in collection) {
        console.log('the square of %d is %d', collection[i], result[i]);
    }
}
async.map(collection, iterator2, callback2);

// Boomerang effect

var fs= require('fs');

var doWhatWasAsked = function(callback) {
    var aFd, bFd, buffer = new Buffer(10);
    function openA() {
        fs.open(__dirname + '/a.txt', 'r', readFromA);
    }
    function readFromA(err, fd) {
        if (err) { callback(err); return; }
        aFd = fd;
        fs.read(aFd, buffer, 0, 10, 10, openB);
    }
    function openB(err) {
        if (err) { callback(err); return; }
        fs.open(__dirname + '/b.txt', 'a', statB);
    }
    function statB(err, fd) {
        if (err) { callback(err); return; }
        bFd = fd;
        fs.fstat(bFd, writeB);
    }
    function writeB(err, bStats) {
            if (err) { callback(err); return; }
            fs.write(bFd, buffer, 0, 10, bStats.size, callback);
    }
    
    openA();
};

console.log('starting...');
doWhatWasAsked(function(err) {
if (err) { throw err; }
console.log('done');
});