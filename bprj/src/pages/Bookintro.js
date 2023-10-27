
//라우터의 /:id 값을 받아와야 한다.
//330p.
// import dotenv from "dotenv";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';
// import dummy from '../public/books.json';
// dotenv.config();

// props 대신 라우터에서 받아야 한다.
// 표시방법을 변경하여 DB에서 자료를 받아오도록 한다.
const param = useParams(); // 라우터의 파라미터를 받는다.

// 백엔드 라우터
const Bookintro = () => {
  // const blst = JSON.stringify(dummy);
  // fetch의 url은 dotenv 처리해야 한다.

  const [bookdata, setBookdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {


        // axios 사용
        // mypage에서 토큰을 넘긴다.
        const resp = await axios.get(`${process.env.BHOST}/selectbook/:id`,
          { bookid: param.id })
          // const resp = await axios.get('http://localhost:8080/selectbook')
          // 전체 조회
          .catch(console.error)
        setBookdata(resp.data) // 정상
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();

  }, [])


  console.log("State: ", bookdata)

  // 331p. 문자열을 숫자로 교체해야 한다.
  // const bdata = blst[param.id];
  const bdata = bookdata[param.id]; // 프론트 라우터 get id와 DB 대조

  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>

      <h1>{bdata.title} </h1>

      <h2>Description</h2>
      <p>로그인해야 책을 읽을수 있습니다.</p>
    </div>
  );
};

export default Bookintro;

// 책읽기 버튼 제작
//
