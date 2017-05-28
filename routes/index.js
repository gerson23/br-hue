var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout');
});

router.get('/partials/:name', function(req, res, next) {
    res.render(req.params.name);
});

module.exports = router;
