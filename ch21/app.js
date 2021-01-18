require('should');
var sum = require('./module1');
var asyn = require('./module2');

describe("Sum Func. and asynch. Test : \n", function(){
    it('should be sum 0,5', function(){
        sum(0,5).should.equal(5);
    });

    it('should be sum 2,5', function(){
        sum(2,5).should.equal(7);
    });

    it('should be sum 1,1 . 1,2 . 2,1 . 10,120 :', function(){
        sum(1,1).should.equal(2);
        sum(1,2).should.equal(3);
        sum(2,1).should.equal(3);
        sum(10,120).should.equal(130);
    });

    it('Testing Asynchronous function test : ', function(){
        asyn.testAsync().should.equal(2);
    })
})