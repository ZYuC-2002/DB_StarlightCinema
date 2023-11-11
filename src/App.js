import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import EmailCheck from './emailcheck';
import Register from './register';
import Login from './login';

function App() {
  return (
    <>
      <div className="Navigation">
        {/* 標頭 */}
        <nav className="menu">
          <ul className="subMenu">
            <li className="mainLink"><a href="https://www.vscinemas.com.tw/vsweb/#" className="firstMenu">影城介紹</a>
              <ul className="sublink">
                <li><a href="https://www.vscinemas.com.tw/vsweb/theater/index.aspx">威秀影城</a></li>
                <li><a href="https://www.vscinemas.com.tw/vsweb/theater/detail2.aspx?id=23">MOVIE</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/emailcheck' element={<EmailCheck />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;