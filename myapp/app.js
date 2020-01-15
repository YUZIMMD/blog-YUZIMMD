var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var studentRouter = require('./routes/studentcontroller');
var userRouter = require('./routes/usercontroller');
var fontRouter = require('./routes/fontcontroller');
var endRouter = require('./routes/endcontroller');
var loginRouter = require('./routes/logincontroller');
var serverRouter = require('./routes/servercontroller');
var otherRouter = require('./routes/othercontroller');
var uploadImgRouter = require('./routes/uploadImgcontroller');
var fontListRouter = require('./routes/fontListController');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended:true
}));
/* 设置静态资源目录 */
app.use('/serverImage', express.static(path.join(__dirname, 'serverImage')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/students',studentRouter);
app.use('/api/user',userRouter);
app.use('/api/login',loginRouter);
app.use('/api/font',fontRouter);
app.use('/api/end',endRouter);
app.use('/api/server',serverRouter);
app.use('/api/other',otherRouter);
app.use('/api/uploadImg',uploadImgRouter);
app.use('/api/fontList',fontListRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With')
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
