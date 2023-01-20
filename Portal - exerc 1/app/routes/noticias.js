module.exports = function(app) {
    app.get('/noticias', (req, resp) =>  resp.render("noticias/noticias"));
};
