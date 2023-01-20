module.exports = function(app) {
    app.get('/form_add_noticia', (req, resp) =>  resp.render("noticias/noticia"));
};
