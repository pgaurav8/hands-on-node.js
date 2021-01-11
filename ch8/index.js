var timeout = 2000; // 2 seconds
setTimeout(function() {
    console.log('timed out!');
}, timeout);

var timeoutHandle = setTimeout(function() { console.log('yehaa!'); }, 1000);
clearTimeout(timeoutHandle);

var timeoutA = setTimeout(function(){
    console.log('A');
}, 2000);

var timeoutB = setTimeout(function() {
    console.log('B');
    clearTimeout(timeoutA);
}, 1000);


var period = 1000; // 1 second
var interval = setInterval(function() {
    console.log('tick');
}, period);

clearInterval(interval)

process.nextTick(function() {
    console.log('yay!');
});

setImmediate(function A() { 
	console.log("1st immediate"); 
}); 

setImmediate(function B() { 
	console.log("2nd immediate"); 
}); 

process.nextTick(function C() { 
	console.log("1st process"); 
}); 

process.nextTick(function D() { 
	console.log("2nd process"); 
}); 

// First event queue ends here 
console.log("program started"); 

var async = function(){
    console.log('HHH');
}

var interval = 1000; // 1 second
setInterval(function() {
    async(function() {
        console.log('async is done!');
    });
}, interval);

var interval = 1000; // 1 second
(function schedule() {
    setTimeout(function() {
        async(function() {
            console.log('async is done!');
            schedule();
        });
    }, interval)
})();