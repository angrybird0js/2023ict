// Booklist.js
import React from 'react';
// import { useState, useEffect } from 'react';
import Bookitem from "./Bookitem";
import '../App.css'; // CSS 파일을 불러옵니다.

const Booklist = ({ booklist }) => {
  console.log(booklist); // 정상
  // props를 래핑
  // props에서 map을 통하여 값을 분리하므로 오류가 발생하지 않는다. ??

  return (
    <div className="blist-container">
      {booklist.map((book) => (
        <div key={book.id} className="book-card">
          <Bookitem bookitem={book} />
        </div>
      ))}
    </div>
  );
};

export default Booklist;

// <h2>{book.title}</h2>
// <p>Author: {book.author}</p>
// <p>Year: {book.year}</p>
// <img src={book.imageLink} alt={book.title} />
// <p><a href={book.link} target="_blank" rel="noopener noreferrer">More Info</a></p>
