const Bicicleta = require('../models/bicicleta');
var bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function(req, res) {
    res.render('bicicletas/index', { bicis: Bicicleta.allBicis });
}