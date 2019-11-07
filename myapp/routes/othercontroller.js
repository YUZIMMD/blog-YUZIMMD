var express = require('express');
var router = express.Router();
var otherDao = require('../dao/otherDao');
 
router.post('/addotherAction',function(req,res,next){
    otherDao.addOtherAction(req,res,function(result){
        res.send(result);
    });
});
 
router.get('/deleteotherAction',function(req,res,next){
    otherDao.deleteOther(req,res,next);
});
 
router.get('/queryotherAction',function(req,res,next){
    otherDao.queryAllOther(req,res,function(result){
        res.json(result);
    });
});

router.post('/updateotherAction',function(req,res,next){
    otherDao.updateOther(req,res,function(result){
        res.send(result);
    });
}) ;   

module.exports = router;