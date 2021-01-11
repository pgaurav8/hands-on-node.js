/// .addListener

var fs = require('fs'); // get the fs module
var readStream = fs.createReadStream('/home/parmar/wfh/ch7/index.js');
readStream.on('data', function(data) {
console.log(data.toString());
});
readStream.on('end', function() {
console.log('file ended');
});

// Server once Listener
/*
server.once('connection', function (stream) {
    console.log('Ah, we have our first user!');
});


// Remove Listener of connection

function connListener(stream) {
    console.log('Ah, we have our first user!');
    server.removeListener('connection', connListener);
}
server.on('connection', connListener);

*/

var EventEmitter = require('events').EventEmitter;
var util = require('util');

// Here is the MyClass constructor:
var MyClass = function(option1, option2) {
    this.option1 = option1;
    this.option2 = option2;
    console.log(" Inside Myclass !! ");
}

util.inherits(MyClass, EventEmitter);

MyClass.prototype.someMethod = function() {
    this.emit('custom event', 'some arguments');
}

var myInstance = new MyClass(1, 2);

myInstance.on('custom event', function() {
    console.log('got a custom event!');
});


// Emitters Exercise 1

var EventEmitter=require('events').EventEmitter, 
    util = require('util');

var Ticker=function(){ 
	var self = this;
	setInterval(function() {
    self.emit("tick");
    console.log('tick inside Ticker Function !! ');
  }, 1000);
};

util.inherits(Ticker,EventEmitter);
var tick = new Ticker();

// Emitter Excercise 2
tick.on('tick', function(){
    console.log('Tick Listened and Separated Successfully ')
});