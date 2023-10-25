// passport 사용하지 않기로함
var express = require('express');
var mongoose = require('mongoose');
var Usermodel = require("../models/usermodel");

var cors = require('cors');
var router = express.Router();


// 세션을 유지, {session: true} 와 같다.
// redirect는 react에서 구현되어져야 한다.
router.post('/login', cors(), async (req, res) => {


  // 아이디 패스워드 받아서 순차적으로 검사함
  const { username, passwd } = req.body; // post 요청 받음

  // 데이터베이스에서 해당 유저 정보 조회
  const user = await Usermodel.findOne({ userId: username, password: passwd });

  // 사용자가 있다면
  if (user) {
    // 토큰과 함께 접속 성공을 반환
    res.json({ success: true, token: user.token, message: 'Login successful' });
  } else {
    // 유저가 존재하지 않으면 로그인 실패
    res.json({ success: false, message: 'Login failed' });
  }
})

module.exports = router;
