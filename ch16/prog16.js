var spawn = require('child_process').spawn;

require('http').createServer(function(req, res){
    var child = spawn('tail',['-f','/home/parmar/temp/ch16/out.txt']);
    console.log(res);
    child.stdout.pipe(res);
    console.log(res);
    res.on('end', function(){
        child.kill();
    })
}).listen(4000);