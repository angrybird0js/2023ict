// localstorage 에 보관된 토큰을 프론트에서 전달받아 DB 조회
// user, bookId
// 사용자와 구독한 책 목록(컴포넌트)
// 반납기능 추가
//

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import axio from "../utils/axio";
import axios from 'axios';

import Header from "../components/Header";
import Booklist from "../components/Booklist"

const MyPage = () => {

  // 오류처리 try catch
  // const mytoken = localStorage.getItem("mypagekey");
  const navigate = useNavigate();

  var mytoken = localStorage.getItem("mypagekey")
  if (!mytoken) {
    navigate('/loginpage')
    // res.redirect("/LoginPage") ?? backend
  }


  const [mydata, setMydata] = useState([]);


  useEffect(() => {
    const mydataset = async () => {
      try {
        // axios 사용
          const resp = await axios.post('/mybook', {token: mytoken} ) //사용자, 책목록
          .catch(console.error)
        setMydata(resp.data)
        // id 값을 바탕으로 데이터를 가져온다.
        //

      } catch (e) {
        console.log(e);
      }
    };
    mydataset();
    console.log(mydata);
    // 템플릿에 정리해야함, useState
    // 사용자 mydata.user , 읽는책 mydata.bookidData

  }, [mytoken])

  // 사용자 정보를 가져온 후 읽고있는 책 id를 바탕으로 책 정보를 가져와 컴포넌트를 통해 출력해야 한다.
  // mydata.bookidData[]
  // 템플릿 레이아웃 확인요
  // 템플릿에서 컴포넌트 props




  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>

      <h1>{mydata.userId} </h1>

      <Booklist booklist={mydata.bookidData} />

    </div>
  )
}

export default MyPage;
