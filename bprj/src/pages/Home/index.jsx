import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Booklist from '../../components/Booklist/index';
import Header from '../../components/Header/index';
import Pagination from '../../components/Pagination/index';
import '../../App.css';

const Home = () => {
  const [booklst, setBooklst] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('http://localhost:8080/selectbook');
        setBooklst(resp.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booklst.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>

      <div className="blist-container">
        <Booklist booklist={currentBooks} />
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={booklst.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Home;