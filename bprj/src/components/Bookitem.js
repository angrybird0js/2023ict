import { Link, Outlet } from 'react-router-dom';
import '../App.css'; // 추가

const Bookitem = ({ bookitem }) => {
  // 중괄호 안해서 표시 안되었음
  // props를 parameter에서 가져온다
  // console.log(book) // 정상
  const { title, author, language, country, year, pages, id, imageLink, link } = bookitem;

  return (
    <div >
      <Outlet />
      <Link to={`/bookintro/:${id}`} className="book-link">
        <div><img src={imageLink} alt={title} /></div>
        <div className="book-details">
          <p>{title}</p>
          <p>{author}</p>
          <p>{country}</p>
          <p>{year}</p>
        </div>
      </Link>
      <div className="book-additional-info">
        <p>{language}</p>
        <p>{pages} pages</p>
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </div>
    </div>
  );
}

export default Bookitem;
