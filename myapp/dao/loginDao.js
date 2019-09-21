var userSql=require('../modules/sqlCommand').user_sql;
var mysql = require('mysql');
var config = require('../modules/dbconfig');
var db = require('../modules/basicConnection');
 
function queryLogin(req,res,callback){
  var result={};
  var param = req.query;
    db.queryArgs(userSql.selectName,param.name,function(err,rows){
        if(!err&&rows.length>0){ 
            if(rows[0].passWord == param.passWord){
                result={
                    code:200,
                    msg:'success'
                }
            }else{
                result={
                    code:202,
                    msg:'密码错误'
                }
            }           
        }else{
            result={
                code:201,
                msg:'err:'+err,
            }
           
        }  
        res.send(result);
    });
  
    
 
    
}

module.exports={
    queryLogin:queryLogin
}