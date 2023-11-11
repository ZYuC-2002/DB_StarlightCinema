import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // 登入小卡
    console.log('Logging in with email:', email, 'and password:', password);

    // 驗證Email格式
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Email is not in a valid format.');
      return;
    }

    // 登入成功後跳到首頁
    window.location.href = '/home';
  };

  return (
    <div className="app-container">
      {/* 上方固定一個navigation bar */}
      <div className="navbar">
        {/* 到時候再加上連結或其他東西 */}
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>

      <header className="App-header">
        <h1 className="app-title">Starlight Cinema Login Page</h1>
      </header>
      <div className="card">
        <form onSubmit={handleLogin}>
          {/* <label>Email:</label> */}
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="請輸入電子信箱"
          />
          <br />
          {/* <label>Password:</label> */}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="請輸入密碼"
          />
          <br />
          <div className="button-container">
            <button type="button" className="register-button">
              Sign up
            </button>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          {/* 下面是只做了Login按鈕的部分 */}
          {/* <button type="submit" className="login-button">
            Login
          </button> */}
        </form>
        <p className="forgot-password">
          <a href="/forgot-password">忘記密碼</a>
        </p>
      </div>
    </div>
  );
}

export default App;

