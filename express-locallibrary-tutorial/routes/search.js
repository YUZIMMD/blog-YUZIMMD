var express = require('express');
var router = express.Router();
var connect = require('../db/connect'); 
 
var  addSql = 'SELECT * FROM websites';
/* GET users listing. */
router.get('/', function(req, res, next) {
    connect.connection.query(addSql,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }else{
        res.send(result);
        }        
    // connect.connection.end(); 
});
});
module.exports = router;
