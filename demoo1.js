var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The average is currently: " + dt.avg(321,231));
    res.end();
}).listen(8080);
