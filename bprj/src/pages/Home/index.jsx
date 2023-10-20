import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import dummy from "../public/books.json";
import axios from 'axios'
import Booklist from "../../components/Booklist/index";
import Header from "../../components/Header/index"; // Header 컴포넌트 불러오기
import '../../App.css'


const Home = () => {
  // const blist = JSON.parse(JSON.stringify(dummy));
  // const [booklst,] = useState(blist); // 변경
  // fetch의 url은 dotenv 처리해야 한다.

  const [booklst, setBooklst] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        // axios 사용
        const resp = await axios.get('http://localhost:8080/selectbook')
          .catch(console.error)
        setBooklst(resp.data) // 정상
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();

  }, [])

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
