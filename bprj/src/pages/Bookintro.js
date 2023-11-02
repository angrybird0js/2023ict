
//라우터의 /:id 값을 받아와야 한다.
//330p.
// import dotenv from "dotenv";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import axio from "../utils/axio"
// import dummy from '../public/books.json';
// dotenv.config();

// props 대신 라우터에서 받아야 한다.
// 표시방법을 변경하여 DB에서 자료를 받아오도록 한다.

import Header from "../components/Header"; // Header 컴포넌트 불러오기
import Bookcover from "../components/Bookcover"; // 컴포넌트를 통해 받아온 컨텐츠를 표시


// 백엔드 라우터
const Bookintro = () => {
  // const blst = JSON.stringify(dummy);
  // fetch의 url은 dotenv 처리해야 한다.

  const [bookdata, setBookdata] = useState([]);
  var bookidParam = useParams();
  // 라우터의 파라미터를 받는다.
  // 파라미터 아닌 URI로 나온다.
  console.log("parameter: ", bookidParam); // 정상

  // const [bookid, setBookid ] = useState('');
  // setBookid(Object.values(bookidParam.id));

  const [bookid, ] = useState(Object.values(bookidParam.id));

  // var bookid = Object.values(bookidParam.id);
  // mongodb 저장된 id값은 Int32
  console.log("키값을 제거한 id값", bookid);


  // proxy 설정한 후에는 URI만 입력(중요)
  // :id 중첩 라우터 349p.
  //
  // useEffect() 는 렌더링한 후 실행되므로 useRef() 또는 <Component /> 를 사용해야 한다.
  //
  useEffect(() => {
    console.log("useEffect 내의 id값", bookid);
    // 콘솔 확인 결과 useEffect는 컴포넌트보다 나중에 실행된다.
    //this.는 아님
    const fetchdata = async () => {
      try {
        const result = await axios.get(`/selectbook/${bookid}`)
          //
          .catch(console.error);
        await setBookdata(result.data[0]); //
        console.log("useEffect 실행여부 : ", result.data[0]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchdata();

  }, [bookid] ); // 실행시기 문제 해결


  console.log("State: ", bookdata) // 빈 배열, 고쳐서 정상

  // 331p. 문자열을 숫자로 교체해야 한다.
  // const bdata = blst[param.id];
  // const bdata = bookdata[bookidparam.id]; // 프론트 라우터 get id와 DB 대조
  // const bdata = bookdata; // 프론트 라우터 get id와 DB 대조
  // 하나의 값을 가져왔으므로 State값을 바로 사용할 수 있다.

  // Bookintro의 <p>{...}</p>을 삭제한 후 정상작동

  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>
      <Bookcover bprops = {bookdata} />

      <h2>Description</h2>
      <p>로그인해야 책을 읽을수 있습니다.</p>
      <p> </p>
    </div>
  );
};

export default Bookintro;

// 책읽기 버튼 제작
//
