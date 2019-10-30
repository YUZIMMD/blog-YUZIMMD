var express = require('express');
var router = express.Router();
var endDao = require('../dao/endDao');
 
router.post('/addendAction',function(req,res,next){
    endDao.addEndAction(req,res,function(result){
        res.send(result);
    });
});
 
router.get('/deleteendAction',function(req,res,next){
    endDao.deleteEnd(req,res,next);
});
 
router.get('/queryendAction',function(req,res,next){
    endDao.queryAllEnd(req,res,function(result){
        res.json(result);
    });
});

router.post('/updateendAction',function(req,res,next){
    endDao.updateEnd(req,res,function(result){
        res.send(result);
    });
}) ;   

module.exports = router;