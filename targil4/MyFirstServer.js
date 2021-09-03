var http = require('http');

http.createServer(function (rec,res){
    res.writeHead(200,{'Content-type':'texrq/html'});
    res.end('hello world');
}).listen(8080);