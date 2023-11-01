
var mongoose = require('mongoose');
var Bookmodel = require("../models/bookmodel");
var express = require('express');
var cors = require('cors');
var router = express.Router();

// var fs = require("fs");

// 완전한 crud 구현을 위해서는 별도 파일에 구현.
// var dummy = JSON.parse(fs.readFileSync("./public/book.json", "UTF8"));
// npm start 서버 홈 위치로부터
// console.log(dummy) // 정상 작동
// DB 구성 후 mongodb에서 받아와야 한다.


// 하위 라우터 책의 ID , cors() 대신 proxy 사용
router.get('/:id', cors(), async (req, res, next ) => {

  console.log( "조회할 id : ", req.params.id, typeof(req.params.id) );
  // var numid = Number(req.params.id)
  try {
    // 자료형 변환을 하지 않았더라도 정상출력
      const result = await Bookmodel.find({id: req.params.id}) //자료형: number
      .lean();
    if (!result) {
      res.status = 404;
      return;
    }
    // console.log("ID를 조회한 결과값 : ", result); // 조회 안됨

    await res.json(result);
  } catch (e) {
    // res.throw(500, e); // 서버 오류만 일단 처리함
    console.error(e)
  }
});

module.exports = router;
