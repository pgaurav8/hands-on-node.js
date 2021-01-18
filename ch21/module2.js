var assert = require('assert');
module.exports.testAsync = function(beforeExit) {
    var n = 0;
    setTimeout(function(){
        ++n;
        assert.ok(true);
    }, 200);
    setTimeout(function(){
        ++n;
        assert.ok(true);
    }, 200);
    beforeExit(function(){
        assert.equal(2, n, 'Ensure both timeouts are called');
    });
};
