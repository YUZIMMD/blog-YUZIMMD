// 前端自检清单目录
var font_list_sql=require('../modules/sqlCommand').font_list_sql;
// var mysql = require('mysql');
// var config = require('../modules/dbconfig');
var db = require('../modules/basicConnection');
 
/**
 * 新增一条数据
*/
function addFontListAction(req,res,next){
    var param = req.body;
    db.queryArgs(font_list_sql.insertOne,[param.name,param.fid,param.fname],function(err,result) {
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
function deleteFontList(req,res,next){
var param = req.query;
db.queryArgs(font_list_sql.deleteOne,param.id,function(err,result){
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
function queryAllFontList(req,res,callback){
  var result={};
    db.query(font_list_sql.selectAll,function(err,rows){
        if(!err){            
            result={
                code:200,
                msg:'success',
                result:rows,
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
 * 通过id查询数据
*/
function queryOneFontList(req,res,callback){
    var param = req.query;
    var result={};
    db.queryArgs(font_list_sql.selectName,param.name,function(err,rows){
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
    addFontListAction:addFontListAction,
    deleteFontList:deleteFontList,
    queryAllFontList:queryAllFontList,
    queryOneFontList:queryOneFontList
}