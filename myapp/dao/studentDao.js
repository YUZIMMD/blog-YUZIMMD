// 示例
var studentSql=require('../modules/sqlCommand').student_sql;
var mysql = require('mysql');
var config = require('../modules/dbconfig');
var db = require('../modules/basicConnection');
 
 
function addStudentAction(req,res,next){
    var param = req.query || req.params;
    //student_id,name,subject,grade,sex
    db.queryArgs(studentSql.insertOne,[param.studentid,param.name,param.subject,param.grade,param.sex],function(err,result) {
        if(!err){
            result={
                code:200,
                msg:'success'
            };
        }else{
            result={
                code:201,
                msg:'err:'+err
            }
        }
        db.doReturn(res,result);
        
    });
}
function deleteStudent(req,res,next){
var param = req.query;
db.queryArgs(studentSql.deleteOne,param.studentid,function(err,result){
if(!err){
    result={
        code:200,
        msg:'success'
    }
}else{
    result={
        code:201,
        msg:'err:'+err
    }
   
}
db.doReturn(res,result); 
});
}
function queryAllStudent(req,res,callback){
  var result={};
    db.query(studentSql.selectAll,function(err,rows){
        if(!err){            
            result={
                code:200,
                msg:'success',
                studentlist:rows,
            }
         
        }else{
            result={
                code:201,
                msg:'err:'+err,
            }
           
        }     
        callback(result);
    });
  
    
 
    
}
 
function updateStudent(req,res,callback){
    let find = true;
    var param = req.body;
    var result={};
    db.queryArgs(studentSql.selectOne,param.studentid,function(err,rows){
        if(rows!=null){
            var student={};
            var row = rows[0];
           (typeof(param.name) == 'undefined')? student.name=row.name: student.name=param.name;
            (typeof(param.subject)=='undefined')?student.subject=row.subject:student.subject=param.subject;
            (typeof(param.grade)=='undefined')?student.grade=row.grade:student.grade=param.grade;
            (typeof(param.sex)=='undefined')?student.sex=row.sex:student.sex=param.sex;
            student.studentid=param.studentid;       
        db.queryArgs(studentSql.updateOne,[student.name,student.subject,student.grade,student.sex,student.studentid],function(err,rows){
            if(!err){
                result={
                    code:200,
                    msg:'success',
                }
            }else{
                result={
                    code:201,
                    msg:'err:'+err
                }
            }
            callback(result);
        });
        }else{
            console.log('null');
        }
        
    });
 
 
    
  
}
module.exports={
    addStudentAction:addStudentAction,
    deleteStudent:deleteStudent,
    queryAllStudent:queryAllStudent,
    updateStudent:updateStudent,
}