var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
const configuracio = require('./infrastructure/config').config();

var api = express();

// serve the react app files
console.log(`${__dirname}`);
api.use(express.static(`${__dirname}/client/build`));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

//S'habilita el CORS per totes les peticiones
api.use(function (req, res, next) {
    // CORS headers
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

api.use('/api', routes);

api.get('/favicon.ico', function (req, res) {
    res.status(204);
});



/**
 * Middelware que s'executa quan no es troba no existeix.
 */
api.use((req, res, next) => {
    next(new Error('Recurs no trobat'));
});


/**
 * Aquest middelware s'encarrega de retornar el error al usuari. El middelware només agafa
 * l'informació que porta l'error i el retorna al client, al midelware anterior es on s'ha especificat el missatge
 * que s'ha de retornar
 */
api.use((error, request, response, next) => {
    let resposta = {
        message: error.message
    };

    //En principi es decideix que només es mostrarà el detall en desenvolupament
    if (configuracio.env === 'development' && error.detall) {
        resposta.detall = error.detall;
    }

    response.status(error.status).json(resposta);
});



var server = api.listen(process.env.PORT || 8081, function () {
    console.log("app running on port.", server.address().port);
});