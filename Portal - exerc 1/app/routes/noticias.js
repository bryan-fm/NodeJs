var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

    var connection = dbConnection();

    app.get('/noticias', (req, resp) => {
    
        connection.query('select * from noticias',
            function(error, result) {
                //console.log(result);
                resp.render("noticias/noticias", {noticias : result});
            });

    });
};
