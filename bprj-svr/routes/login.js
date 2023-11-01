// passport 사용하지 않기로함

var mongoose = require('mongoose');
var Usermodel = require("../models/usermodel");

var express = require('express');
var cors = require('cors');
var router = express.Router();

// 세션을 유지, {session: true} 와 같다.
// redirect는 react에서 구현되어져야 한다.
// login router 내의 root
router.post('/', cors(), async (req, res, next ) => {

  console.log(req.body);
  try {
  // 아이디 패스워드 받아서 순차적으로 검사함
  const { id, pw } = req.body; // post 요청 받음

  // 데이터베이스에서 해당 유저 정보 조회

  // const user = await Usermodel.find({ userId: username, password: passwd }).lean();
  const user = await Usermodel.find({ userId: username, password: passwd }).lean();

  // 사용자가 있다면
  if (user) {
    // 토큰과 함께 접속 성공을 반환
    await res.json({ success: true, token: user.token, message: 'Login successful' });
  } else {
    // 유저가 존재하지 않으면 로그인 실패
    await res.json({ success: false, message: 'Login failed' });
  }

} catch (e) {
  console.log(e)
}
})
module.exports = router;
