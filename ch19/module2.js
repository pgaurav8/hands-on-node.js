var cnt1=0;
var onePublicMethod = function(){
    console.log('Counter 1 : you already called this function ' + (++cnt1) + ' times');
    return 'you already called this function ' + (++cnt1) + ' times';
};

var cnt2=0;
var anotherPublicMethod = function () {
    console.log('Counter 2 : you already called this function ' + (++cnt2) + ' times');
    return 'you already called this function ' + (++cnt2) + ' times';
};

module.exports = {
    functionA : onePublicMethod,
    functionB : anotherPublicMethod
}