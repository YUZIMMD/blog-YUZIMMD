var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//初始化express
var app = express();

// 模板引擎设置
app.set('views', path.join(__dirname, 'views'));//设置视图存放的目录
app.set('view engine', 'pug');//设置模板引擎为pug，可以用的引擎非常多
//中间介，应用层
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//静态资源存放目录
//定义使用哪些路由文件
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
