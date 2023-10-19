// Header 컴포넌트
import React from 'react';
import Navigation from './Nav'; // 네비게이션 컴포넌트 불러오기

function Header() {
  return (
    <div className="header">
      <Navigation /> {/* 네비게이션 컴포넌트 추가 */}
    </div>
  );
}

export default Header;
