var express = require('express');
var router = express.Router();
var fontDao = require('../dao/fontDao');
 
router.post('/addfontAction',function(req,res,next){
    fontDao.addFontAction(req,res,function(result){
        res.send(result);
    });
});
 
router.get('/deletefontAction',function(req,res,next){
    fontDao.deleteFont(req,res,next);
});
 
router.get('/queryfontAction',function(req,res,next){
    fontDao.queryAllFont(req,res,function(result){
        res.json(result);
    });
});

router.post('/updatefontAction',function(req,res,next){
    fontDao.updateFont(req,res,function(result){
        res.send(result);
    });
});  

router.get('/queryfontOneAction',function(req,res,next){
    fontDao.queryOneFont(req,res,function(result){
        res.json(result);
    });
});  

router.get('/queryOneFontByKindsAction',function(req,res,next){
    fontDao.queryOneFontByKinds(req,res,function(result){
        res.json(result);
    });
});  

module.exports = router;