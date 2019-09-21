var express = require('express');
var router = express.Router();
var loginDao = require('../dao/loginDao');
 
router.get('/',function(req,res,next){
    loginDao.queryLogin(req,res,next);
});  

module.exports = router;