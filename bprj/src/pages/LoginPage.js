import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axio from "../utils/axio";
// import axios from 'axios';
import Header from "../components/Header"; // Header 컴포넌트 불러오기


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState(""); // 스키마와 구별
  const navigate = useNavigate();



  const handleLogin = () => {
    // Implement your login logic here
    // axios post 요청



    const conn = async () => {
      try {


        // axios 사용, 로그인 정보 post 전송
        // useState로부터 받은 값을 axios에 전달
        // const resp = await axios.post(`${process.env.BHOST}/login`, { username, passwd })
        const resp = await axio.post('/login',
          { "id": username, "pw": passwd }) // , {withCredentials: true})
          // { username, passwd }, {withCredentials: true})
          // post 이므로 헤더에 아이디를 포함하지 않도록 한다.
          // const resp = await axios.get('http://localhost:8080/selectbook')
          //
          .then((result) => {
            // console.log("로그인 결과: ", result) // 안나옴
            //
            if (result.data.success) {
              window.localstorage.setItem("mypagekey", result.data.token);
              // islogin 키 처리 추가하고 Nav에서 적용
              navigate("/mypage");     // login 성공시 redirect
            }//end if
          })
          .catch(console.error)

        // resp 결과값 받아서 처리
        console.log("로그인 결과 : ", resp)
        // 토큰 저장

      } catch (e) {
        console.log(e);
        // login 실패시 홈으로 redirect
      }
    };
    conn();


  };

  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>
      <h2>Login Page</h2>

      <div>
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>

    </div>
  );
};

export default LoginPage;
