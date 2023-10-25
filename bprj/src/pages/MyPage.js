// localstorage 에 보관된 토큰을 프론트에서 전달받아 DB 조회
// user, bookId
// 사용자와 구독한 책 목록(컴포넌트)
// 반납기능 추가
//

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from "../components/Header";

const MyPage = () => {

  // 오류처리 try catch
  // const mytoken = window.localstorage.getItem("mypagekey");
  const navigate = useNavigate();

  var mytoken = window.localhost.getItem("mypagekey")
  if (!mytoken) {
    navigate('/LoginPage')
    // res.redirect("/LoginPage") ?? backend
  }


  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    const mydataset = async () => {
      try {
        // axios 사용
        const resp = await axios.post(`${process.env.BHOST}/mypage/`,
          { token: this.mytoken })
          // const resp = await axios.get('http://localhost:8080/selectbook')
          // 전체 조회
          .catch(console.error)
        setMydata(resp.data) // 정상
      } catch (e) {
        console.log(e);
      }
    };
    mydataset();
    console.log(mydata); // 템플릿에 정리해야함, useState

  }, [])

  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>

      <h1>{bdata.title} </h1>

      <h2>Description</h2>
      <p>로그인해야 책을 읽을수 있습니다.</p>
    </div>
  )
}

export default MyPage;
