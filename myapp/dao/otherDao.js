var other_sql=require('../modules/sqlCommand').other_sql;
var mysql = require('mysql');
var config = require('../modules/dbconfig');
var db = require('../modules/basicConnection');
var dayjs = require('dayjs');
 
function addOtherAction(req,res,next){
    var param = req.body;
    var createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    db.queryArgs(other_sql.insertOne,[param.title,param.tags,param.kinds,param.content,createTime],function(err,result) {
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
function deleteOther(req,res,next){
var param = req.query;
db.queryArgs(other_sql.deleteOne,param.id,function(err,result){
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
function queryAllOther(req,res,callback){
  var result={};
    db.query(other_sql.selectAll,function(err,rows){
        if(!err){            
            result={
                code:200,
                msg:'success',
                otherlist:rows,
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
 
function updateOther(req,res,callback){
    let find = true;
    var param = req.body;
    var result={};
    var updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    db.queryArgs(other_sql.selectOne,param.id,function(err,rows){
        if(rows!=null){
            var other={};
            var row = rows[0];
            for(let i in param){
                (typeof(param[i]) == 'undefined')? other[i]=row[i]: other[i]=param[i];
            }
            other.id=param.id;   
        db.queryArgs(other_sql.updateOne,[other.title,other.tags,other.kinds,other.content,updateTime,other.id],function(err,rows){
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
    addOtherAction:addOtherAction,
    deleteOther:deleteOther,
    queryAllOther:queryAllOther,
    updateOther:updateOther,
}