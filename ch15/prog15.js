// Spawning Process and waiting to complete execution

var exec = require('child_process').exec;

exec('cat *.js', function(err,stdout,stderr){
    if(err){
        console.log(' Child process exited with error code, ' + err.code);
        return;
    }
    console.log(stdout);
});

var options = {
    timeout : 6000000
};

exec('echo Hello', options, function(err,stdout,stderr){
    if(err){
        console.log(' Child process exited with error code, ' + err.code);
        return;
    }
    console.log(stdout);
});

// Spawning process

var spawn = require('child_process').spawn;

var child = spawn('tail',['-f','/home/parmar/temp/ch15/prog15.js']);
child.stdout.on('data',function(data){
    console.log('stdout : ' + data);
    
    // For killing process
    // child.kill('SIGKILL');
});

child.stderr.on('data',function(data){
    console.log(' Stderr : ' + data);
});