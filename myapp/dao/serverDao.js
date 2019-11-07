var server_sql=require('../modules/sqlCommand').server_sql;
var mysql = require('mysql');
var config = require('../modules/dbconfig');
var db = require('../modules/basicConnection');
var dayjs = require('dayjs');
 
function addEndAction(req,res,next){
    var param = req.body;
    var createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    db.queryArgs(server_sql.insertOne,[param.title,param.tags,param.content,createTime],function(err,result) {
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
function deleteEnd(req,res,next){
var param = req.query;
db.queryArgs(server_sql.deleteOne,param.id,function(err,result){
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
function queryAllEnd(req,res,callback){
  var result={};
    db.query(server_sql.selectAll,function(err,rows){
        if(!err){            
            result={
                code:200,
                msg:'success',
                serverlist:rows,
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
 
function updateEnd(req,res,callback){
    let find = true;
    var param = req.body;
    var result={};
    var updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    db.queryArgs(server_sql.selectOne,param.id,function(err,rows){
        if(rows!=null){
            var server={};
            var row = rows[0];
            for(let i in param){
                (typeof(param[i]) == 'undefined')? server[i]=row[i]: server[i]=param[i];
            }
            server.id=param.id;   
        db.queryArgs(server_sql.updateOne,[server.title,server.tags,server.content,updateTime,server.id],function(err,rows){
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
    addEndAction:addEndAction,
    deleteEnd:deleteEnd,
    queryAllEnd:queryAllEnd,
    updateEnd:updateEnd,
}