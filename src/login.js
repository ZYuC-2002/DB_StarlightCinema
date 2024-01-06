import React, { useState,useEffect } from 'react';
import './App.css';
import './login.css'
import Navbar from './upperlistuser';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // API
  const [messages, setMessages] = useState(null);
  const [messageApiError, setMessageApiError] = useState(null);
  const [postMessageError, setPostMessageError] = useState();
  
  const handleLogin = (event) => {
    event.preventDefault();

    // API
    fetch("http://192.168.10.101:5000/member_login", {
      method: "POST",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          password: password,
      }),
  })

  .then((res) => res.json())
  .then((data) => {
      // 在顯示訊息前可進行錯誤處理
      if (data.ok === 0) {
        setPostMessageError(data.message);
        return;
      }
      fetchMessages();
  })
  .catch((err) => {
      setPostMessageError(err.message);
  });

    // 登入小卡
    console.log('Logging in with email:', email, 'and password:', password);
    cookies.set('account',email);
    // 驗證Email格式
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Email is not in a valid format.');
      return;
    }
    
    // 登入成功後跳到首頁
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  const API_ENDPOINT = "http://127.0.0.1:5000/member_login";
    const fetchMessages = () => {
      return fetch(API_ENDPOINT)
      // 接收到的data轉成json (res是一個Response物件)
      .then((res) => res.json())
      // 接收到的data存到messages
      .then((data) => {
          setMessages(data);
      })
      // 錯誤訊息存到messageApiError
      .catch((err) => {
          setMessageApiError(err.message);
      });
  };

  const [search, setSearch] = useState('');
  const cookies=new Cookies();

  useEffect(() => {
      cookies.set('search',search,{path:'/'});
      console.log(cookies)
  },[search])
    
  return (
    <>
        <Navbar setSearch={setSearch}/>
        <div className="app-container">
        <h2 className='app-title'>Starlight Cinema Login Page</h2>
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
            <div className="button-login-container">
                <Link to={'/Register'}>
                    <button type="button" className="register-button">
                    Sign up
                    </button>
                </Link>
                <button type="submit" className="login-button">
                Login
                </button>
            </div>
            </form>
            <p className="forgot-password">
            <a href="/ForgetPassword">忘記密碼</a>
            </p>
        </div>
        </div>
    </>
  );
}

export default Login;