var font_sql=require('../modules/sqlCommand').font_sql;
var mysql = require('mysql');
var config = require('../modules/dbconfig');
var db = require('../modules/basicConnection');
var dayjs = require('dayjs');
 
/**
 * 新增一条数据
*/
function addFontAction(req,res,next){
    var param = req.body;
    var createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    db.queryArgs(font_sql.insertOne,[param.title,param.tags,param.kinds,param.content,createTime],function(err,result) {
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
 * 通过id删除一条数据
*/
function deleteFont(req,res,next){
var param = req.query;
db.queryArgs(font_sql.deleteOne,param.id,function(err,result){
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
/**
 * 查询所有数据
*/
function queryAllFont(req,res,callback){
  var result={};
    db.query(font_sql.selectAll,function(err,rows){
        if(!err){            
            result={
                code:200,
                msg:'success',
                fontlist:rows,
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
 /**
 * 通过id来修改数据
*/
function updateFont(req,res,callback){
    let find = true;
    var param = req.body;
    var result={};
    var updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    db.queryArgs(font_sql.selectOne,param.id,function(err,rows){
        if(rows!=null){
            var font={};
            var row = rows[0];
            for(let i in param){
                (typeof(param[i]) == 'undefined')? font[i]=row[i]: font[i]=param[i];
            }
            font.id=param.id;   
        db.queryArgs(font_sql.updateOne,[font.title,font.tags,font.kinds,font.content,updateTime,font.id],function(err,rows){
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
/**
 * 通过id查询数据
*/
function queryOneFont(req,res,callback){
    var param = req.query;
    var result={};
    db.queryArgs(font_sql.selectOne,param.id,function(err,rows){
        if(!err){
            result={
                code:200,
                info:rows[0]
            }
        }else{
            result={
                code:201,
                msg:'err:'+err
            }
        }
        callback(result);
    });
}

module.exports={
    addFontAction:addFontAction,
    deleteFont:deleteFont,
    queryAllFont:queryAllFont,
    updateFont:updateFont,
    queryOneFont:queryOneFont
}