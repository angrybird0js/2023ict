import React from 'react';
import './index.css';

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
