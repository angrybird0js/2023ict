import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axio from "../utils/axio";
import axios from 'axios';
import Header from "../components/Header"; // Header 컴포넌트 불러오기


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState(""); // 스키마와 구별
  // const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // axios post 요청
    console.log(username, passwd); // 정상입력됨


    const conn = async () => {
      try {

        // axios 사용, 로그인 정보 post 전송
        // useState로부터 받은 값을 axios에 전달

        //proxy 주소 사용으로 해결
        const resp = await axios.post('/login', { id : username, pw : passwd })
        // const resp = await fetch('http://localhost:8080/login',
        //   { id: username, pw: passwd },
        //   {method: "POST"}
        // , {withCredentials: true})
          .then((res) => {
            console.log("로그인 결과: ", res.data) // 안나옴
              // islogin 키 처리 추가하고 Nav에서 적용
           if (res.data.success) {
             localStorage.setItem("mypagekey", res.data.token);
            }//end if

         } ) // end then
          .catch(console.error);
        // 토큰 저장
        console.log(resp);
      } catch (e) {
        console.log(e);
        // login 실패시 홈으로 redirect
      } // end try-catch
    }; // end conn
    conn();

    // var istoken = localStorage.getItem("mypagekey")
    // if (istoken) {
    //   navigate("/mypage");     // login 성공시 redirect
    //   // res.redirect("/LoginPage") ?? backend
    // }


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
