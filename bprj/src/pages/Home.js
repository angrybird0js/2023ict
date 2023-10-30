// import dotenv from "dotenv";
import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import dummy from "../public/books.json";
import axio from "../utils/axio";
// import axios from 'axios';
import Booklist from "../components/Booklist";
import Header from "../components/Header"; // Header 컴포넌트 불러오기
import '../App.css'

// dotenv.config();

const Home = () => {
  // const blist = JSON.parse(JSON.stringify(dummy));
  // const [booklst,] = useState(blist); // 변경
  // fetch의 url은 dotenv 처리해야 한다.

  const [booklst, setBooklst] = useState([]);

  useEffect(() => {
    // 382p.
    // 오류, Bookintro.js 같다.
    const fetchdata = async () => {
      try {
        // axios 사용
        // const resp = await axios.get(`${process.env.BHOST}/frontbook`) // undefined error
        const resp = await axio.get('/frontbook') // undefined error, 직접 주소 입력함
          .catch(console.error)
        // console.log("Axios response: ", resp.data)
        setBooklst(resp.data) // 정상
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();

  }, [])

  // console.log("state booklst: ", booklst); // 정상
  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>

      <Booklist booklist={booklst} />

    </div>
  );
};

export default Home;
