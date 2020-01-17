var express = require('express');
var router = express.Router();
var ProgressDao = require('../dao/progressDao');
 
router.post('/addProgressAction',function(req,res,next){
    ProgressDao.addProgressAction(req,res,function(result){
        res.send(result);
    });
});
 
router.get('/queryProgressAction',function(req,res,next){
    ProgressDao.queryAllProgress(req,res,function(result){
        res.json(result);
    });
});

module.exports = router;