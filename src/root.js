import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Main from './main.js'
import Register from "./register.js";
import Employeemain from "./employee.js";
import Login from "./login.js";
import EmailCheck from "./emailcheck.js";
import MovieDetail from "./moviedetail.js";
import TimeList from "./timelist.js";
import TicketTypeNormal from "./tickettypenormal.js";
import TicketTypeSpecial from "./tickettypespecial.js";
import CustomerService from "./customerservice.js";

const AppRouter = () => (
    <Router>
      
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Employeemain/" element={<Employeemain/>} />
        <Route path="/Register/" element={<Register/>} />
        <Route path="/Login/" element={<Login/>} />
        <Route path="/Emailcheck/" element={<EmailCheck/>} />
        <Route path="/Moviedetail/" element={<MovieDetail/>} />
        <Route path="/Timelist/" element={<TimeList/>} />
        <Route path="/Tickettypenormal/" element={<TicketTypeNormal/>} />
        <Route path="/Tickettypespecial/" element={<TicketTypeSpecial/>} />
        <Route path="/Customerservice/" element={<CustomerService/>} />
      </Routes>  
      
    </Router>
  );
  
  export default AppRouter;