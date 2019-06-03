var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var app = express();

// ----
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// ----



// ** 가장 중요하게 봐야할 이 부분 ** //
app.use('/api', require('./routes/api'));
app.use('/signup_info', require('./routes/signup_info'));
app.use('/login', require('./routes/login'));

// localhost:3000/login
// 화면에 "login 페이지입니다"


// 페이지가 없으면 404를 띄워준다
app.use(function(req, res, next) {
  next(createError(404));
});

// 딱히 안봐도 되는 부분
// 에러났을때 500 페이지 띄우기
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send({ msg: err.message })
});

module.exports = app;