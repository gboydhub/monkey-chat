var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { motd: 'Future site of Monkey Chat' });
});

module.exports = router;
