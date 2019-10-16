var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
 
router.post('/addUserAction',function(req,res,next){
    userDao.addUserAction(req,res,function(result){
        res.send(result);
    });
});
 
router.get('/deleteUserAction',function(req,res,next){
    userDao.deleteUser(req,res,next);
});
 
router.get('/queryUserAction',function(req,res,next){
    userDao.queryAllUser(req,res,function(result){
        res.json(result);
    });
});

router.post('/updateUserAction',function(req,res,next){
    userDao.updateUser(req,res,function(result){
        res.send(result);
    });
}) ;   

module.exports = router;