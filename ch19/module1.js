var counter=0;

var onePrivateMethod = function(){
    return counter;
};

var onePublicMethod = function(){
    onePrivateMethod();
    console.log('Already called this module '  + counter + ' times')
    return 'Already called this module' + counter + ' times';
};

module.exports = onePublicMethod;