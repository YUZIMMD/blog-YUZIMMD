var express = require('express');
var router = express.Router();
var studentDao = require('../dao/studentDao');
 
router.get('/addStudentAction',function(req,res,next){
 
    studentDao.addStudentAction(req,res,next);
 
});
 
router.get('/deleteStudentAction',function(req,res,next){
studentDao.deleteStudent(req,res,next);
});
 
router.get('/queryStudentAction',function(req,res,next){
 
    studentDao.queryAllStudent(req,res,function(result){
        
        res.render('student',{'result':result});
    });
  
    
 
   
});
router.post('/updateStudentAction',function(req,res,next){
    studentDao.updateStudent(req,res,function(result){
        res.json(result);
    });
    }) ;   
module.exports = router;