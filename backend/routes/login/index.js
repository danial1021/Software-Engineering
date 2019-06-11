var express = require('express');
var createError = require('http-errors');
var mysql = require('sync-mysql');
var router = express.Router();

const connection = new mysql({
    host: '127.0.0.1',
    user: 'root',
    password: '021021',
    port: 3307,
    database: 'sw_project'
});

router.get('/', function(req, res, next) {

    let result = connection.query(`select * from user`);
    res.send(result);
});



// 페이지가 없어서 404를 띄우게 하는 것
router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;