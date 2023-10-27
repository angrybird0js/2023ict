import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/index';
import LoginPage from './pages/LoginPage/index';
import Join from './pages/Join/index';
import Bookintro from './pages/Bookintro/index';
import Mypage from './pages/Mypage/index';


function App() {

  // route: home, login, join
  // login join을 별개 페이지로 오픈
  // booklist는 컴포넌트를 사용하면서 홈에서 리스트를 보여준다.
  // dvi를 충접할때 parent는 position:relative, child는 absolute로 배치한다.

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookintro:id" element={<Bookintro />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/join" element={<Join />} />
    </Routes>
  );
}

export default App;
