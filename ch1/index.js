(function() {
    console.log('hello 1');
    })();

function myFunction1 () {
   console.log('hello 2');
   }

myFunction1();

function myFunction2 () {
    console.log('hello 3');
    }
   
    (function() {
    myFunction2();
    })();

var myFunc = function() {
console.log('hello 4');
}
var myFunc2 = myFunc;
//  console.log(myFunc2);
myFunc2();

var schedule = function(timeout, callbackfunction) {
   return {
    start: function() {
    setTimeout(callbackfunction, timeout)
    }
   };
};
   
(function() {
    var timeout = 1000; // 1 second
    var count = 0;
    schedule(timeout, function doStuff() {
    console.log(++ count + " Second delay");
    // schedule(timeout, doStuff);
    }).start(timeout);
})();