var express = require('express');
var createError = require('http-errors');
var mysql = require('sync-mysql');
const uuidv4 = require('uuid/v4');
const jwt = require('jsonwebtoken');
var router = express.Router();

const connection = new mysql({
    host: '127.0.0.1',
    user: 'root',
    password: '021021',
    port: 3307,
    database: 'sw_project'
});

router.post('/', function(req, res, next) {

  try
  {
    const { token } = req.body

    var decoded = jwt.decode(token);
    
    let result = connection.query(`select * from user where id = "${decoded.id}"`);
    // user 테이블에서 id가 admin인 행의 token 값을 가져옴
    var decoded = jwt.verify(token, result[0].token);
    if(result[0].admin)
    {
      res.send("true");
      return;
    }
    res.send("false");
    return;
  }
  catch(e)
  {
    res.send("false");
    console.log(e);
  }
    
});



// 페이지가 없어서 404를 띄우게 하는 것
router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;