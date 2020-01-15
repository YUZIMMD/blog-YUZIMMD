var express = require('express');
var router = express.Router();
var fontListDao = require('../dao/fontListDao');
 
router.post('/addfontAction',function(req,res,next){
    fontListDao.addFontListAction(req,res,function(result){
        res.send(result);
    });
});
 
router.get('/deletefontAction',function(req,res,next){
    fontListDao.deleteFontList(req,res,next);
});
 
router.get('/queryfontAction',function(req,res,next){
    fontListDao.queryAllFontList(req,res,function(result){
        res.json(result);
    });
});

router.get('/queryfontOneAction',function(req,res,next){
    fontListDao.queryOneFontList(req,res,function(result){
        res.json(result);
    });
});   

module.exports = router;