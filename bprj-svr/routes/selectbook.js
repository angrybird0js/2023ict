var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var cors = require('cors');
// var fs = require("fs");
var Bookmodel = require("../models/bookmodel");
// 완전한 crud 구현을 위해서는 별도 파일에 구현.
// var dummy = JSON.parse(fs.readFileSync("./public/book.json", "UTF8"));
// npm start 서버 홈 위치로부터
// console.log(dummy) // 정상 작동
// DB 구성 후 mongodb에서 받아와야 한다.


// 하위 라우터 책의 ID
router.get('/:id', cors(), async (req, res, next) => {
  // console.log(dummy);
  console.log(req.params.id);
  try {

    const result = await Bookmodel.findOne( {
      id : req.params.id } )
      .lean(); // req.param.id에 따른 값을 조회해야 한다.
    if (!result) {
      res.status = 404;
      return;
    }
    console.log("ID를 조회한 결과값 : ", result);

    res.json(result);
  } catch (e) {
    // res.throw(500, e); // 서버 오류만 일단 처리함
    console.error(e)
  }
});

module.exports = router;
