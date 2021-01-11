setTimeout(function() {
    console.log('World!');
}, 2000);

console.log('Hello');

// Never ending with scheduling the event.
/*
(function schedule() {
    setTimeout(function() {
        console.log('Hello World!');
        schedule();
    }, 1000);
})();
*/


// Callback function in Timeout

var open = false;

setTimeout(function() {
    open = true;
    console.log(open); // At last
}, 1000)

console.log(open);
while(!open) {
// wait
console.log(open);
}
console.log(open);

console.log('opened!');


