import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async () => {
    try {
      const userData = {
        userId,
        password,
      };

      const response = await axios.post('http://localhost:8080/login', userData);

    
      if (response.data.success) {
        console.log('Login successful!', response.data);
        window.localStorage.setItem("token", response.data.token);
        window.location.href = '/';
      } else {
        setLoginError('로그인에 실패했습니다. 다시 시도해주세요.');
      }

    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('로그인 중 오류가 발생했습니다.');
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
        {loginError && <div className="error">{loginError}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
