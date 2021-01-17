var https = require('https');
var options = {
    host : 'encrypted.google.com',
    port : 443,
    path :  '/',
    method : 'GET'
};

var req = https.request(options, function(res){
    console.log("Status code : ", res.statusCode);
    console.log(" Headers : " , res.headers);

    res.on('data', function(chunk){
        process.stdout.write(chunk);
    });
});

req.end();

var options1= {
    host : 'encrypted.google.com',
    path : '/'
};
https.get(options, function(res){
    res.on('data', function(chunk){
        console.log("\n\n\n")
        console.log(chunk.toString());
    });
});