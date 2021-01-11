setTimeout(function() {
    console.log('World!');
    }, 2000);

console.log('Hello');

(function schedule() {
    setTimeout(function() {
    console.log('Welcome Everyone');
    schedule();
    }, 1000);
    })();

var open = false;
    setTimeout(function() {
    open = true;
    }, 4000)
    while(!open) {
    // wait
    }
    console.log('opened!');