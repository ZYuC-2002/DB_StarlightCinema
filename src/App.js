import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './AppCSS.css';
import EmailCheck from './emailcheck';
import Register from './register';
import Login from './login';
import SimpleSlider from './postslide';
import Navbar from './upperlistuser';

function App() {
  return (
    <>
      const [search, setSearch] = useState('');
      const cookies=new Cookies();

      useEffect(() => {
          cookies.set('search',search,{path:'/'});
          console.log(cookies)
      },[search])

      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/emailcheck' element={<EmailCheck />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;