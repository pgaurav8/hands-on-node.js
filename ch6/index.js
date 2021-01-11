
//Node adds a native buffer implementation with a JavaScript way of manipulating
var buf1 = new Buffer('Hello World!');

// buffer from strings with other encodings ( “ascii”, “utf8” and “base64”)
var buf2 = new Buffer('8b76fde713ce', 'base64');

//create a new empty buffer with a specific size
var buf3 = new Buffer(1024);
buf3[5] = 90;

var str1 = buf1.toString();
console.log(str1);

var str2 = buf2.toString('base64');
console.log(str2);

var str3 = buf3.toString('base64');
console.log(buf3);

var buffer = new Buffer('this is the string in my buffer');
var slice = new Buffer(10);
var targetStart = 0, sourceStart = 10, sourceEnd = 20;
buffer.copy(slice, targetStart, sourceStart, sourceEnd);
console.log(buffer.toString());
console.log(slice.toString());



// Buffer Excercise 1
buf1 = new Buffer(100);
var i=0;
for(i=0;i<100;i++){
    buf1[i]=i;
    // console.log(buf1[i].toString());
}
console.log(buf1);

// Buffer Excercise 2
var slc = buf1.slice(40,60);
console.log(slc);

// Buffer Excercise 3
var slice = new Buffer(20);
var targetStart=0, srcStart = 40, srcEnd=60;
buf1.copy(slice, targetStart, srcStart, srcEnd);
console.log(slice);