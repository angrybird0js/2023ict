

var mongoose = require('mongoose');
var Usermodel = require("../models/usermodel");
var Bookmodel = require("../models/bookmodel");

var express = require('express');
var cors = require('cors');
var router = express.Router();


// 읽기 등록한 책 id 반환
// 반납처리 라우터
// 프론트와 대조 확인


router.post('/', cors(), async (req, res, next) => { // isLogin 추가해야 한다.
  try {
    const { token } = req.body;
    // token 검사
    if (!token) {
      await res.status = 404;
      return;
    };

    const result1 = await Usermodel.findOne({ token: this.token }).lean(); // 사용자 조회
    if (!result1) {
      await res.status = 404;
      return;
    }

    console.log(result1); // 키를 찾아 다음으로 넘김
    // 반복자 컴포넌트가 있으므로 키에 맞는 레코드를 추가로 찾아야한다.
    // 책 내용 API는 구현하지 않음
    //

    // bookId 순회: 결과값을 props 처리하여 컴포넌트에서 수행하도록함
    // 이 라우터에서는 결과값의 목록만 넘겨주면 된다.
    // key값이 배열인경우?
    const result2 = await Bookmodel.find({ bookId: result1.bookIds }).lean(); // 개별도서 조회

    if (!result2) {
      await res.status = 404;
      return;
    }else {
      // 한 페이지에 2종류의 데이터를 표시해야 한다.
      await res.json({ user: result1, bookidData: result2 });
    }
  } catch (e) {
    console.error(e);
  }
  //




  res.json();
  // res.send('respond with a resource');
  // res.redirect("/LoginPage") ??
});

module.exports = router;
