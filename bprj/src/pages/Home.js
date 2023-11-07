// import dotenv from "dotenv";
import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import dummy from "../public/books.json";
// import axio from "../utils/axio";
import axios from 'axios';
import Booklist from "../components/Booklist";
import Header from "../components/Header"; // Header 컴포넌트 불러오기
// import Pagination from '../components/Pagination/index';
import '../App.css'

// dotenv.config();

const Home = () => {
  // const blist = JSON.parse(JSON.stringify(dummy));
  // const [booklst,] = useState(blist); // 변경
  // fetch의 url은 dotenv 처리해야 한다.

  const [booklst, setBooklst] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [booksPerPage] = useState(6);

  useEffect(() => {
    // 382p.
    // 오류, Bookintro.js 같다.
    const fetchdata = async () => {
      try {
        // axios 사용
        // const resp = await axios.get(`${process.env.BHOST}/frontbook`) // undefined error
        // 프록시를 통해서 URL을 입력할 필요는 없다.
        const resp = await axios('/frontbook')
         // .then(JSON.parse(JSON.stringify())
         // .then(JSON.parse() )
         // undefined error, 직접 주소 입력함
          .catch(console.error);
        console.log("Axios response: ", resp.data);

        await setBooklst(resp.data); // 정상복구됨
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();

  }, [])

  // pagination test
  // const indexOfLastBook = currentPage * booksPerPage;
  // const indexOfFirstBook = indexOfLastBook - booksPerPage;
  // const currentBooks = booklst.slice(indexOfFirstBook, indexOfLastBook);

  // const paginate = pageNumber => setCurrentPage(pageNumber);

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


// {
//   "method": "GET",
//   "Access-Control-Allow-Origin": "*",
//   "Accept": 'application/json',
//   "Content-Type": 'application/json'
// }

// <Pagination
//   booksPerPage={booksPerPage}
//   totalBooks={booklst.length}
//   paginate={paginate}
// />
