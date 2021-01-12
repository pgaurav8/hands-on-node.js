// Importing File Module
var fs = require('fs');

// Displays File Stastics
fs.stat('/home/parmar/temp/ch9/test.txt', function(err, stats){
    if(err){
        console.log(err.message);
        return;
    }

    console.log(stats.isFile());
    console.log(stats.isFIFO());
    console.log(stats);
});

// Reading a File

fs.open('/home/parmar/temp/ch9/test.txt', 'r', function(err, fd){
    if(err){
        console.log(err.message);
        return;
    }

    var readBuffer = new Buffer (1024);

    fs.read(fd, readBuffer, 0, readBuffer.length, 0, function(err, readBytes){
        if(err)
            throw err;

        console.log('Just Read ' + readBytes + ' Bytes');

        if(readBytes>0){
            console.log(readBuffer.toString());
        }
    });
});

// Write In a File

fs.open('/home/parmar/temp/ch9/test.txt', 'a', function(err, fd){
    var writeBuffer = new Buffer('Gaurav Parmar');

    fs.write(fd, writeBuffer, 0, writeBuffer.length, null, function(err, writeBytes){
        if(err)
            throw err;

        console.log(' Written ' + writeBytes + ' Bytes');
    });
});

// Excercise 1


fs.stat('/home/parmar/temp/ch9/a.txt', function(err, stats){
    if(err){
        console.log(err.message);
        return;
    }
    console.log('\n\n Excercise 1 : \n\n');
    console.log('\n' + stats.size + ' is size of a.txt file \n\n');
});


// Excercise 4

fs.open('/home/parmar/temp/ch9/a.txt', 'w', function(err, fd){
    var writeBuffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz','utf-8');

    fs.write(fd, writeBuffer, 0, writeBuffer.length, null, function(err, writeBytes){
        if(err)
            throw err;
        console.log('\n\n Excercise 4 : \n\n');
        console.log(' Written ' + writeBytes + ' Bytes');
    });
});


// Excercise 5
fs.open('/home/parmar/temp/ch9/a.txt', 'a', function(err, fd){
    var writeBuffer = new Buffer('abc','utf-8');

    fs.write(fd, writeBuffer, 0, writeBuffer.length, null, function(err, writeBytes){
        if(err)
            throw err;
        console.log('\n\n Excercise 5 : \n\n');
        console.log(' Written ' + writeBytes + ' Bytes');
    });
});

// Excercise 6
fs.open('/home/parmar/temp/ch9/a.txt', 'w', function(err, fd){
    var writeBuffer = new Buffer('7','utf-8');

    fs.write(fd, writeBuffer, 0, writeBuffer.length, 7, function(err, writeBytes){
        if(err)
            throw err;
        console.log('\n\n Excercise 6 : \n\n');
        console.log(' Written ' + writeBytes + ' Bytes');
    });
});

// Excercise 2

fs.open('/home/parmar/temp/ch9/a.txt', 'r', function(err, fd){
    if(err){
        console.log(err.message);
        return;
    }

    var readBuffer = new Buffer (1024);

    fs.read(fd, readBuffer, 0, readBuffer.length, 0, function(err, readBytes){
        if(err)
            throw err;

        console.log('\n\n Excercise 2 : \n\n');
        console.log('Just Read ' + readBytes + ' Bytes');

        if(readBytes>0){
            console.log(readBuffer.slice(10,14).toString());
        }
    });
});

// Excercise 3

fs.open('/home/parmar/temp/ch9/a.txt', 'r', function(err, fd){
    if(err){
        console.log(err.message);
        return;
    }

    var readBuffer = new Buffer (1024);

    fs.read(fd, readBuffer, 0, readBuffer.length, 0, function(err, readBytes){
        if(err)
            throw err;

        console.log('\n\n Excercise 3 : \n\n');
        console.log('Just Read ' + readBytes + ' Bytes');

        if(readBytes>0){
            
            console.log('\n\n');
            console.log(readBuffer.slice(5,9).toString());
            console.log('\n\n');
            console.log(readBuffer.slice(10,14).toString());
            console.log('\n\n');
        }
    });
});
