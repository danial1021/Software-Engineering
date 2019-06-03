var express = require('express');
var createError = require('http-errors');
var mysql = require('sync-mysql');

const connection = new mysql({
  host: '127.0.0.1',
  user: 'root',
  password: '021021',
  port: 3307,
  database: 'sw_project'
});

var router = express.Router();


router.get('/', function(req, res, next) {
    // 데이터베이스에 연결해서 샘플 값 아무거나 넣어보기
    let result = connection.query(`insert into user values("admin", "password", "name", 0, 0)`);
    res.send(result);
});










// 페이지가 없어서 404를 띄우게 하는 것
router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;