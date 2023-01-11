var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, resp) => resp.render("home/index"));

app.get('/formulario_inclusao_noticia', (req, resp) =>  resp.render("admin/form_add_noticia"));

app.get('/noticias', (req, resp) =>  resp.render("noticias/noticias"));

app.listen(3000, () => (console.log('teste express')));