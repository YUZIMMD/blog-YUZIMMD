var express = require('express');
var router = express.Router();
var connect = require('../db/connect'); 
 
var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
/* GET users listing. */
router.get('/', function(req, res, next) {
    connect.connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }else{
        res.send(result);
        }        
    connect.connection.end();
});
});
module.exports = router;
