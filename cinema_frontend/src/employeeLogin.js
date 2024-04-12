import React, { useState,useEffect } from 'react';
import './employeelogin.css';
import Navbaremployee from './upperlistemployee';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

function EmployeeLogin() {
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
    window.location.href = '/';
  };
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

  return (
    <>
        <Navbaremployee setSearch={setSearch}/>
        <div className="app-container">
        <h2 className='app-title'>Employee Login Page</h2>
        <div className="card">
            <form onSubmit={handleLogin}>
            {/* <label>Email:</label> */}
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="請輸入員工編號"
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
            <div className="button-employee-container">
                <Link to={"/Employeemain"}>
                  <button type="submit" className="employee-login-button">Login</button>
                </Link>
            </div>
            </form>
        </div>
        </div>
    </>
  );
}

export default EmployeeLogin;