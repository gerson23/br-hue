var express = require('express');
var request = require('request');
var xml2js= require('xml2js');
var _ = require('underscore');

var router = express.Router();
var parser = new xml2js.Parser({explicitArray: false});

router.get('/congressman', function(req, res, next) {
    request({
        method: 'GET',
        uri: 'http://www.camara.gov.br/SitCamaraWS/Deputados.asmx/ObterDeputados',
        gzip: true
    }, function(error, response, body) {
        parser.parseString(body, function(err, result) {
            result = _.where(result.deputados.deputado, {condicao: 'Titular'});
            res.send(result);
        });
    });
});

module.exports = router;
