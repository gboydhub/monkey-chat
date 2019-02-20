var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {
  console.log(res.params);
  res.render('index', { motd: 'Future site of Monkey Chat' });
});

module.exports = router;
