
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

import Header from "../components/Header"; // Header 컴포넌트 불러오기


// 백엔드 라우터
const Bookintro = () => {
  // const blst = JSON.stringify(dummy);
  // fetch의 url은 dotenv 처리해야 한다.

  const [bookdata, setBookdata] = useState([]);
  const bookidparam = useParams();
  // 라우터의 파라미터를 받는다.
  // 파라미터 아닌 URI로 나온다.
  console.log("parameter: ", bookidparam); // 정상

  useEffect(() => {
    const fetchdata = async () => {
      try {

        // axios 사용
        // 로그인하지 않은 상태
        const resp = await axios.get(`${process.env.BHOST}/selectbook/:${bookidparam.id}`) //get req, port주의
          // { bookid: param.id }) // 오류, post방식, 닫는 괄호 추가
          // const resp = await axios.get('http://localhost:8080/selectbook')
          // 전체 조회
          .catch(console.error)
        setBookdata(resp.data) // 정상
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();

  }, []) // useParams 오류


  console.log("State: ", bookdata) // 빈 배열

  // 331p. 문자열을 숫자로 교체해야 한다.
  // const bdata = blst[param.id];
  const bdata = bookdata[bookidparam.id]; // 프론트 라우터 get id와 DB 대조

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
