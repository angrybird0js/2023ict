var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var cors = require('cors');
var fs = require("fs");
var Bookmodel = require("../models/bookmodel");
// 완전한 crud 구현을 위해서는 별도 파일에 구현.
// var dummy = JSON.parse(fs.readFileSync("./public/book.json", "UTF8"));
// npm start 서버 홈 위치로부터
// console.log(dummy) // 정상 작동
// DB 구성 후 mongodb에서 받아와야 한다.

/* GET eBook API */
router.get('/', cors(), async (req, res, next) => {
  // console.log(dummy);
  try {
    //오류
    // const result = await Bookmodel.find().exec(); // 전체 조회
    const result = await Bookmodel.find().lean(); // 전체 조회
    if (!result) {
      res.status = 404;
      return;
    }
    console.log("결과값 : ", result); // array , typeof()
    // 문제 있을시 json 변환해야 한다.
    res.json(result); // 가능하다면 json을 반환할수 있도록
  } catch (e) {
    // res.throw(500, e); // 서버 오류만 일단 처리함
    console.error(e)
  }

  // console.log(rslt); // 함수 반환
  // res.json( result )
  // res.json(dummy);
  // res.send("port opened")
});

module.exports = router;
