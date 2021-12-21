var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('admin route, should be hidden on production');
});

module.exports = router;
