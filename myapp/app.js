var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userInfo = require('./routes/userInfo');
//初始化express
var app = express();



//字符串匹配，总体字符表示方式可以借鉴正则的规则
app.get('/ab?cd',function(req,res){
  res.send('匹配acd和abcd');
});

app.get('/ab+cd',function(req,res){
  res.send("匹配abcd,abbcd,abbbcd");
});
//匹配任何路径中含有a的路径
app.get(/a/,function(req,res){
  res.send('匹配任何路径中含有a的路径');
});
//匹配butterfly, draggonfly, fly结尾的
app.get(/.*fly$/,function(req,res){
  res.send('匹配fly结尾');
});

//中间介

//没有挂载路径的中间件，每个请求都会执行该中间件
// app.use(function(req,res,next){
//   console.log('Time',Date.now());
// });

// //挂载了路径的中间件，任何指向该路径的请求都会执行它

// app.use('/user/:id',function(){
//   console.log('Request Type:',req.method);
//   next();    
// });
//路由和句柄函数，处理指向该路径的GET请求

app.get('/user/:id',function(req,res,next){
  res.send('users');
});

//连接数据库mysql
var mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    dbOptions = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'test'
    };

// 模板引擎设置
app.set('views', path.join(__dirname, 'views'));//设置视图存放的目录
app.set('view engine', 'pug');//设置模板引擎为pug，可以用的引擎非常多
//中间介，应用层
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//静态资源存放目录，托管静态文件
//定义使用哪些路由文件
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userInfo', userInfo);

// 捕获404并转发到错误处理程序
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理
app.use(function(err, req, res, next) {
  // 设置局部，只提供开发中的错误
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 输出错误页面
  res.status(err.status || 500);
  res.render('error');
});
//输出app对象
module.exports = app;
