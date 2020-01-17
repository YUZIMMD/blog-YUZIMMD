// 前端
var progress_sql=require('../modules/sqlCommand').progress_sql;
var db = require('../modules/basicConnection');
var dayjs = require('dayjs');
 
/**
 * 新增一条数据
*/
function addProgressAction(req,res,next){
    var param = req.body;
    var createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    db.queryArgs(progress_sql.insertOne,[param.name,param.content,createTime],function(err,result) {
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

/**
 * 查询所有数据
*/
function queryAllProgress(req,res,callback){
  var result={};
    db.query(progress_sql.selectAll,function(err,rows){
        if(!err){            
            result={
                code:200,
                msg:'success',
                Progresslist:rows,
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

module.exports={
    addProgressAction:addProgressAction,
    queryAllProgress:queryAllProgress
}