var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('../portfolio/html/portfolio.html',function(err,data){
        res.writeHead(200,{'content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8088);

console.log('master your server has been started.......');

// ===================  url  =======================

// localhost:8088