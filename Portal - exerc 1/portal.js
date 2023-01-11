var http = require('http');

var server = http.createServer( function(req, resp) {

    resp.end("<html><body><h1> Portal de Noticias </h1></body></html>");
});

server.listen(3000);