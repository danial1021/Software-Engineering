var express = require('express');
var createError = require('http-errors');
var mysql = require('sync-mysql');
const uuidv4 = require('uuid/v4');

const connection = new mysql({
  host: '127.0.0.1',
  user: 'root',
  password: '021021',
  port: 3307,
  database: 'sw_project'
});
var router = express.Router();



router.post('/', function(req, res, next) {
  // 데이터베이스에 연결해서 값 넣어보기
  const { id, email_address, academy, password, confirm_password} = req.body
  console.log(uuidv4());
  try
  {
    let result = connection.query(`INSERT INTO user (id,email,academy,password,confirm_password,token,admin) 
        VALUES("${id}", "${email_address}", "${academy}", "${password}","${confirm_password}", "${uuidv4()}",false)`);
    res.send(result);
  }
  catch(e)
  {
    console.log(e);
  }
});











// 페이지가 없어서 404를 띄우게 하는 것
router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;