var userSql=require('../modules/sqlCommand').user_sql;
var mysql = require('mysql');
var config = require('../modules/dbconfig');
var db = require('../modules/basicConnection');
 
 
function addUserAction(req,res,next){
    var param = req.body;
    db.queryArgs(userSql.insertOne,[param.name,param.passWord],function(err,result) {
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
function deleteUser(req,res,next){
var param = req.query;
db.queryArgs(userSql.deleteOne,param.id,function(err,result){
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
function queryAllUser(req,res,callback){
  var result={};
    db.query(userSql.selectAll,function(err,rows){
        if(!err){            
            result={
                code:200,
                msg:'success',
                userlist:rows,
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
 
function updateUser(req,res,callback){
    let find = true;
    var param = req.body;
    var result={};
    db.queryArgs(userSql.selectOne,param.id,function(err,rows){
        if(rows!=null){
            var user={};
            var row = rows[0];
           (typeof(param.name) == 'undefined')? user.name=row.name: user.name=param.name;
            (typeof(param.passWord)=='undefined')?user.passWord=row.passWord:user.passWord=param.passWord;
            user.id=param.id;       
        db.queryArgs(userSql.updateOne,[user.name,user.passWord,user.id],function(err,rows){
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
    addUserAction:addUserAction,
    deleteUser:deleteUser,
    queryAllUser:queryAllUser,
    updateUser:updateUser,
}