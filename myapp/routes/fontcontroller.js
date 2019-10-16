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
    fontDao.updatefont(req,res,function(result){
        res.send(result);
    });
}) ;   

module.exports = router;