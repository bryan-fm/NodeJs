var http = require('http');
var server = http.createServer( (req, resp) => {

    var categoria = req.url.replace("/","");

    console.log(categoria);
    var type = "<html><body><h1> Página Inicial </h1></body></html>";

    if(categoria == 'tecnologia') {
        type = "<html><body><h1> Portal de Noticias de Tec </h1></body></html>";
    }

    if(categoria == 'moda') {
        type = "<html><body><h1> Portal de Noticias de Moda </h1></body></html>";
    }

    if(categoria == 'jogos') {
        type = "<html><body><h1> Portal de Noticias de Jogos </h1></body></html>";
    }

    resp.end(type);
    
});

server.listen(3000);