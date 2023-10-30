
//라우터의 /:id 값을 받아와야 한다.
//330p.
// import dotenv from "dotenv";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import axio from "../utils/axio"
// import dummy from '../public/books.json';
// dotenv.config();

// props 대신 라우터에서 받아야 한다.
// 표시방법을 변경하여 DB에서 자료를 받아오도록 한다.

import Header from "../components/Header"; // Header 컴포넌트 불러오기


// 백엔드 라우터
const Bookintro = () => {
  // const blst = JSON.stringify(dummy);
  // fetch의 url은 dotenv 처리해야 한다.

  const [abookdata, setAbookdata] = useState([]);
  var bookidParam = useParams();
  // 라우터의 파라미터를 받는다.
  // 파라미터 아닌 URI로 나온다.
  console.log("parameter: ", bookidParam); // 정상


  useEffect(() => {


    // let bid = bookidParam.id;

    const fetchdata = async () => {
      try {
        const resp = await axio.get(`/selectbook/${bookidParam.id}`)
        // const resp = await axios.get(`/selectbook/${bookidParam.id}` )
          // .then( (respond) => {setAbookdata(respond.data)} )
          .catch(console.error);
        setAbookdata(resp.data); // 정상
        console.log(resp);
      } catch (e) {
        console.log(e);
      }

    };

    fetchdata();

  }, [bookidParam] ) // useParams 오류 해결,  문서를 열때


  console.log("State: ", abookdata) // 빈 배열, 고쳐서 정상

  // 331p. 문자열을 숫자로 교체해야 한다.
  // const bdata = blst[param.id];
  // const bdata = bookdata[bookidparam.id]; // 프론트 라우터 get id와 DB 대조
  // const bdata = bookdata; // 프론트 라우터 get id와 DB 대조
  // 하나의 값을 가져왔으므로 State값을 바로 사용할 수 있다.


  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>

      <h1>{abookdata[0].title} </h1>

      <h2>Description</h2>
      <p>로그인해야 책을 읽을수 있습니다.</p>
    </div>
  );
};

export default Bookintro;

// 책읽기 버튼 제작
//
