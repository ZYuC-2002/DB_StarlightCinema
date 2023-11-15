import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Main from './main.js'
import Register from "./register.js";
import Employeemain from "./employee.js";
import Login from "./login.js";
import EmailCheck from "./emailcheck.js";
import MovieInfo from "./movieinfo.js";

const AppRouter = () => (
    <Router>
      
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Employeemain/" element={<Employeemain/>} />
        <Route path="/Register/" element={<Register/>} />
        <Route path="/Login/" element={<Login/>} />
        <Route path="/Emailcheck/" element={<EmailCheck/>} />
        <Route path="/Movieinfo/" element={<MovieInfo/>} />
      </Routes>  
      
    </Router>
  );
  
  export default AppRouter;