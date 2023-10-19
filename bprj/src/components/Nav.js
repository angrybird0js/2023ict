// Navigation 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li className="main-link">
          <Link to="/">
            <AiOutlineBook size={30} />
            <span>E-book</span>
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <AiOutlineUser size={20} />
            MyPage
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <AiOutlineQuestionCircle size={20} />
            문의
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
