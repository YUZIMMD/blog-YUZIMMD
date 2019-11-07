var express = require('express');
var router = express.Router();
var serverDao = require('../dao/serverDao');
 
router.post('/addserverAction',function(req,res,next){
    serverDao.addEndAction(req,res,function(result){
        res.send(result);
    });
});
 
router.get('/deleteserverAction',function(req,res,next){
    serverDao.deleteEnd(req,res,next);
});
 
router.get('/queryserverAction',function(req,res,next){
    serverDao.queryAllEnd(req,res,function(result){
        res.json(result);
    });
});

router.post('/updateserverAction',function(req,res,next){
    serverDao.updateEnd(req,res,function(result){
        res.send(result);
    });
}) ;   

module.exports = router;