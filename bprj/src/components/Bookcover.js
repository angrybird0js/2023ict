// Bookcover.js
// Outlet 342p.
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import '../App.css'; // CSS 파일을 불러옵니다.

const Bookcover = ( props ) => {

  const { title, author, language, country, year, pages, id, imageLink, link } = props.bprops;
    // console.log(props.bprops)
  console.log( "props : ", title ); //
  // 객체에서 값을 분리해야 한다.


  return (
    <div>
      <Outlet />
      {console.log(id, imageLink, link)}
      <div>
        <div>
          <h1>{title}</h1>
          <p>{author}</p>
          <p>{country}</p>
          <p>{year}</p>
        </div>
        <div>
          <p>{language}</p>
          <p>{pages} pages</p>
        </div>
      </div>
    </div>
  );
};

export default Bookcover;
