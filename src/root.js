import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import App from './App.js'
import Main from './main.js'
import Register from "./register.js";
import Employeemain from "./employee.js";
import Login from "./login.js";
import MovieList from "./movieList.js";
import MovieInfo from "./movieinfo.js";
import EmailCheck from "./emailcheck.js";
import ForgotPassword from "./fogotPassword.js";
import PaymentChoose from "./paymentChoose.js";
import PaymentPage from "./paymentPage.js";
// import Vegetable from "./vegetable.js";

const AppRouter = () => (
    <Router>
      
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/App/" element={<App/>} />
        <Route path="/Employeemain/" element={<Employeemain/>} />
        <Route path="/Register/" element={<Register/>} />
        <Route path="/Login/" element={<Login/>} />
        <Route path="/MovieList/" element={<MovieList/>} />
        <Route path="/MovieInfo/" element={<MovieInfo/>} />
        <Route path="/Emailcheck/" element={<EmailCheck/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/PaymentChoose" element={<PaymentChoose/>} />
        <Route path="/PaymentPage" element={<PaymentPage/>} />
      </Routes>  
      
    </Router>
  );
  
  export default AppRouter;