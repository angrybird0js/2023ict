import React from 'react';
// import { useState, useEffect } from 'react';
import Bookitem from "../Bookitem/index";

const Booklist = ({ booklist }) => {
  // console.log(booklist); // 정상
  // props를 래핑


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
