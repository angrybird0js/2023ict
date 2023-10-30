// Navigation 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';

// link to mypage가 로그인 되어있지 않다면 로그인 화면으로 이동해야 한다.
// 로그인 여부에 따라 로그인, 로그아웃 표시
// {?login Login : Logout} 처리
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
          <Link to="/loginpage">
            <AiOutlineUser size={20} />
            Login
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
