var express = require('express');
var router = express.Router();
//路由中间介
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
//对一个路径上的所有请求添加中间介
router.all('/',function(req,res,next){
  console.log("触发请求");
  next();
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
