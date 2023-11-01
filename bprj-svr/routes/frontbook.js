var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var cors = require('cors');
// var fs = require("fs");
var Bookmodel = require("../models/bookmodel");

/* GET eBook API */
router.get('/', cors(), async (req, res, next ) => { // cors({origin: '*'}) // 안됨
  // console.log(dummy);
  try {
    //정상
    // const result = await Bookmodel.find().exec(); // 전체 조회
    const result = await Bookmodel.find().lean(); // 전체 조회
    if (!result) {
      res.status = 404;
      return;
    }
    // console.log("결과값 : ", result); // array , typeof()
    // 문제 있을시 json 변환해야 한다.
    // res.setHeader('Access-Control-Allow-origin', '*');
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
