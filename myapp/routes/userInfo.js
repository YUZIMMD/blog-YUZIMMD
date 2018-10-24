var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    req.getConnection(function(err, conn) {
        if (err) {
            return next(err);//错误处理
        } else {
            //'select * from userInfo' sql语句
            conn.query('select * from test', [], function(err,result) {
                if (err) {
                    return next(err);
                } else {
                    //输出查询到的数据到页面上
                    res.render('user',{info:result});
                }
            });
        }
    });
});

module.exports = router;
