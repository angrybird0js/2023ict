import { useState } from 'react';
import axios from 'axios'; // Axios를 사용하여 HTTP 요청을 보낼 수 있도록 불러옵니다.

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async () => {
    try {
      // 사용자 입력을 JSON 형태로 만듭니다.
      const userData = {
        userId,
        password
      };
    
      // Axios를 사용하여 POST 요청을 보냅니다.
      const response = await axios.post('http://localhost:8080/login', userData);

      // 응답을 확인하고 로그인이 성공했으면 알림 등을 표시할 수 있습니다.
      console.log('Login successful!', response.data);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
