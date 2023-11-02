// import logo from './logo.svg';
// import './App.css';
// import dotenv from "dotenv";

import { Route, Routes } from 'react-router-dom';
// import About from './pages/About'

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
// import Join from './pages/Join'; //구현하지 않음
import Bookintro from './pages/Bookintro';
import MyPage from './pages/MyPage';


function App() {

  // route: home, login, join
  // login join을 별개 페이지로 오픈
  // booklist는 컴포넌트를 사용하면서 홈에서 리스트를 보여준다.
  // dvi를 충접할때 parent는 position:relative, child는 absolute로 배치한다.
  // 라우터 URI 오류 해결

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookintro/:id" element={<Bookintro />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/mypage" element={<MyPage />} />

    </Routes>
  );
}

export default App;

      // <Route path="/join" element={<Join />} />
