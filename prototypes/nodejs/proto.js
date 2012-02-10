var util = require("util");
util.puts("Basic String Output");

var http = require("http");
var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'content-type': 'text/plain'
    });
    response.end('Web App Running');
})
server.listen(8000);
console.log("http://127.0.0.1:8000");