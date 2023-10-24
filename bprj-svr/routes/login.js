var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var cors = require('cors');
var userinfo = require("../models/usermodel");

// /login이 되어야 하는거 아닌가?
router.post('/', cors(), async (req, res, next) => {
  try {
    const { username, password } = req.body; // query로부터 파라미터 추출
    
    // 데이터베이스에서 해당 유저 정보 조회
    const user = await userinfo.findOne({username,password});
    console.log(user)

    if (user) {
      // 유저가 존재하면 로그인 성공
      res.json({ success: true, token:user._id , message: 'Login successful' });
    } else {
      // 유저가 존재하지 않으면 로그인 실패
      res.json({ success: false, message: 'Login failed' });
    }
    
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'An error occurred during login' });
  }
});

module.exports = router;
