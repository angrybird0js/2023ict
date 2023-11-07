import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // 스타일 파일을 불러옵니다.

const Bookitem = ({ bookitem }) => {
  const { title, author, language, country, year, pages, id, imageLink, link } = bookitem;

  return (
    <div>
      <Link to={`/bookintro/${id}`} className="book-link">
        <div><img src={imageLink} alt={title} /></div>
        <div className="book-details">
          <h1>{title}</h1>
          <p class="info-item">Author: {author}</p>
          <p class="info-item">Country: {country}</p>
          <p class="info-item">Year: {year}</p>
        </div>
      </Link>
      <div className="book-additional-info">
        <p>{language}</p>
        <p>{pages} pages</p>
        <a href={link} target="_blank" rel="noopener noreferrer">상세정보</a>
      </div>
    </div>
  );
}

export default Bookitem;
