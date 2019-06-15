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
    const { id, email_address, password} = req.body

    let result = connection.query(`select * from user where id = "${id}"`);
    if(result.length >= 1)
    {
      if(result[0].email == email_address) 
      {
        if(result[0].password == password) 
        {
          let token = uuidv4();
          let updateToken = connection.query(`update user set token = "${token}" where id = "${id}"`);

          var jwt_ = jwt.sign({ id: id, admin: result[0].admin }, token);
          console.log(jwt_);
          res.send({id : 3, token : jwt_}); // 로그인 성공
        }
        res.send({id: 2}); // 비밀번호 틀림
      }
      res.send({id: 1}); // 이메일 틀림
    }
    res.send({id: 0}); // 아이디 틀림
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