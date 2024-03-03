import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import App from './App.js'
import Main from './main.js'
import Register from "./register.js";
import Employeemain from "./employee.js";
import Login from "./login.js";
import EmailCheck from "./emailcheck.js";
import Seatselect from "./pick.js"; 
import Cart from "./cart.js";
import Modify from "./modify.js";
import Uploadfirst from "./uploadfirst.js";
import Uploadsecond from "./uploadsecond.js";
import Uploadthird from "./uploadthird.js";
import MovieList from "./movieList.js";
import MovieInfo from "./movieinfo.js";
import EmployeeLogin from "./employeeLogin.js";
import ForgetPassword from "./forgetPasswird.js";
import PaymentChoose from "./paymentChoose.js";
import PaymentPage from "./paymentPage.js";
import UploadPoster from "./uploadposter.js";
import TimeList from "./timelist.js";
import TicketTypeNormal from "./tickettypenormal.js";
import TicketTypeSpecial from "./tickettypespecial.js";
import MovieDetail from "./moviedetail.js";
import DeletePoster from "./deleteposter.js";
import CustomerService from "./customerservice.js";
import AdviceReply from "./advicereply.js";
import AdviceDetail from "./advicedetail.js";
import RemoveMovie from "./removeMovie.js";
import CenteredText from "./removeToUpload.js";
import TheaterStatus from "./TheaterStatus.js";
import UploadToRemove from "./uploadToRemove.js";

const AppRouter = () => (
    <Router>
      
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/App/" element={<App/>} />
        <Route path="/Employeemain/" element={<Employeemain/>} />
        <Route path="/Register/" element={<Register/>} />
        <Route path="/Login/" element={<Login/>} />
        <Route path="/Emailcheck/" element={<EmailCheck/>} />
        <Route path="/Seatselect/" element={<Seatselect/>} />
        <Route path="/Cart/" element={<Cart/>} />
        <Route path="/Modify/" element={<Modify/>} />
        <Route path="/Uploadfirst/" element={<Uploadfirst/>} />
        <Route path="/Uploadsecond/" element={<Uploadsecond/>} />
        <Route path="/Uploadthird/" element={<Uploadthird/>} />
        <Route path="/MovieList/" element={<MovieList/>} />
        <Route path="/MovieInfo/" element={<MovieInfo/>} />
        <Route path="/EmployeeLogin/" element={<EmployeeLogin/>} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/PaymentChoose" element={<PaymentChoose/>} />
        <Route path="/PaymentPage" element={<PaymentPage/>} />
        <Route path="/Uploadposter" element={<UploadPoster/>} />
        <Route path="/Timelist/" element={<TimeList/>} />
        <Route path="/Tickettypenormal/" element={<TicketTypeNormal/>} />
        <Route path="/Tickettypespecial/" element={<TicketTypeSpecial/>} />
        <Route path="/Moviedetail/" element={<MovieDetail/>} />
        <Route path="/Deleteposter/" element={<DeletePoster/>} />
        <Route path="/Advicereply/" element={<AdviceReply/>} />
        <Route path="/Advicedetail/" element={<AdviceDetail/>} />
        <Route path="/Customerservice/" element={<CustomerService/>} />
        <Route path="/RemoveMovie/" element={<RemoveMovie/>} />
        <Route path="/CenteredText/" element={<CenteredText/>} />
        <Route path="/TheaterStatus/" element={<TheaterStatus/>} />
        <Route path="/UploadToRemove/" element={<UploadToRemove/>} />
      </Routes>  
      
    </Router>
  );
  
  export default AppRouter;