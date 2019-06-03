// localhost:3000/api

// 모듈 불러오기
var express = require('express');
var createError = require('http-errors');
var router = express.Router();


// 미들웨어
router.all('*', function(req, res, next) {
  console.log(req.headers)

  if (req.path === '/xxx') return res.send({ status : 'OK'})
  next()
});


// api

// api/hello
router.get('/hello', function(req, res, next) {
  res.send({ msg: 'hello', a: 1 });
  // json 형식으로 msg, a 의 값이 들어있는 걸 보낸다
});

router.use('/test', require('./test')); // api/test - ./routes/api/test/index.js
router.use('/user', require('./user')); // api/user - ./routes/api/user/index.js


// 페이지가 없으면 404 띄우는거
router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;