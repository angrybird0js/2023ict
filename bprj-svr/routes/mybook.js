var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var Usermodel = require("../models/usermodel");
var Bookmodel = require("../models/bookmodel");


var router = express.Router();

// 읽기 등록한 책 id 반환
// 반납처리 라우터
// 프론트와 대조 확인


router.post('/', cors(), async (req, res, next) => { // isLogin 추가해야 한다.
  try {
    const { token } = req.body;
    // token 검사
    if (!token) {
      res.status = 404;
      return;
    };

    const result = await Usermodel.findOne({ token: this.token }).lean(); // 전체 조회
    if (!result) {
      res.status = 404;
      return;
    }

    console.log(result);
    res.json(result);

  } catch (e) {
    console.error(e);
  }
  //




  res.json();
  // res.send('respond with a resource');
  // res.redirect("/LoginPage") ??
});

module.exports = router;
