// File Statistics

var fs = require('fs');

fs.stat('/etc/passwd', function(err, stats) {
    if (err) {console.log(err.message); return; }
    console.log(stats);
    //console.log('this file is ' + stats.size + ' bytes long.');
});

// Read File

var fs = require('fs');
fs.open('/home/parmar/temp/ch9/prog9.js', 'r', function(err, fd) {
if (err) { throw err }
var readBuffer = new Buffer(1024),
bufferOffset = 0,
bufferLength = readBuffer.length,
filePosition = 100;

fs.read(fd, readBuffer,bufferOffset, bufferLength, filePosition,
    function(err, readBytes) {
        if (err) { throw err; }
        console.log('just read ' + readBytes + ' bytes');
        
        if (readBytes > 0) {
            console.log(readBuffer.slice(0, readBytes));
        }
    });
});

fs.open('/home/parmar/temp/ch9/test.txt', 'a', function(err, fd) {
    var writeBuffer = new Buffer('writing this string'),
    bufferOffset = 0,
    bufferLength = writeBuffer.length,
    filePosition = null;

    fs.write(
        fd,
        writeBuffer,
        bufferOffset,
        bufferLength,
        filePosition,
        function(err, written) {
            if (err) { throw err; }
            console.log('wrote ' + written + ' bytes');
        }
    );
});

// Appender

var startAppender = function(fd, startPos) {
    var pos = startPos;
    return {
    append: function(buffer, callback) {
    var oldPos = pos;
    pos += buffer.length;
    fs.write(fd, buffer, 0, buffer.length, oldPos, callback);
    }
    };
    };

// Start Appender

fs.open('/tmp/test.txt', 'w', function(err, fd) {
    if (err) {throw err; }
    var appender = startAppender(fd, 0);
    appender.append(new Buffer('append this!'), function(err) {
    console.log('appended');
    });
    });