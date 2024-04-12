import React, {useState, useRef,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./forgetPassword.css";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";
import { BrowserRouter as Router } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsSubmitEnabled(event.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setIsSubmitEnabled(event.target.value === password);
    };

    const alertMessage = () => {
        if (!isSubmitEnabled) {
            alert("密碼不一致");
        }
    };

    const emailRef = useRef(null);
    //const nameRef = useRef(null);
    //, name: nameRef.current.value 

    const handleSubmit = (event) => {
        event.preventDefault();
        alertMessage(); // 檢查密碼是否一致

        /* submit */
        if (isSubmitEnabled) {
            /* send email */
            emailjs.send("service_aq2wl0k","template_g4hcvlv",{ email: emailRef.current.value}, "dHTKHVHTtwI7cqz5g")
                .then(function(result) {
                    console.log('SUCCESS!', result.status, result.text);
                    navigate('/emailcheck'); // 密碼一致時跳轉頁面
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                });
        }
    };
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search, cookies])

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className="register-forgetpassword">
                <form onSubmit={handleSubmit}>
                    <div className="inputEmail">
                        <div className="emailLabel">請輸入電子信箱:</div>
                        <input
                            type="email"
                            placeholder="Email"
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                            required value={email}
                            onChange={handleEmailChange}
                            ref={emailRef}
                        />
                    </div>
                    <div className="inputPassword">
                        <div className="passwordLabel">請輸入新密碼:</div>
                        <input
                            type="password"
                            placeholder="Password"
                            pattern="^[a-zA-Z0-9._%+-]{6,20}$"
                            required value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="inputConfirmPassword">
                        <div className="confirmPasswordLabel">請再次輸入新密碼:</div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            pattern="^[a-zA-Z0-9._%+-]{6,20}$"
                            required value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>

                    <button type="submit">發送驗證信</button>
                </form>
                
            </div>
        </>
      
    );
    
};
export default ForgetPassword;