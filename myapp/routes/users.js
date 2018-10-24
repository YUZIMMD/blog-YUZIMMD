var express = require('express');
var router = express.Router();
//路由中间介
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
