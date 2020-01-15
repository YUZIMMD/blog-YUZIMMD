// 后端
var end_sql=require('../modules/sqlCommand').end_sql;
var mysql = require('mysql');
var config = require('../modules/dbconfig');
var db = require('../modules/basicConnection');
var dayjs = require('dayjs');
 
function addEndAction(req,res,next){
    var param = req.body;
    var createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    db.queryArgs(end_sql.insertOne,[param.title,param.tags,param.kinds,param.content,createTime],function(err,result) {
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
db.queryArgs(end_sql.deleteOne,param.id,function(err,result){
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
    db.query(end_sql.selectAll,function(err,rows){
        if(!err){            
            result={
                code:200,
                msg:'success',
                endlist:rows,
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
    db.queryArgs(end_sql.selectOne,param.id,function(err,rows){
        if(rows!=null){
            var end={};
            var row = rows[0];
            for(let i in param){
                (typeof(param[i]) == 'undefined')? end[i]=row[i]: end[i]=param[i];
            }
            end.id=param.id;   
        db.queryArgs(end_sql.updateOne,[end.title,end.tags,end.kinds,end.content,updateTime,end.id],function(err,rows){
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