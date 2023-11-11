import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
// import socketIOClient from 'socket.io-client';
import "./register.css";

const Register = () => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        alertMessage(); // 在提交前检查密码是否一致

        /* submit */
        if (isSubmitEnabled) {
            /* send email */
            emailjs.send("service_aq2wl0k","template_g4hcvlv",{ email: emailRef.current.value }, "dHTKHVHTtwI7cqz5g")
                .then(function(result) {
                    console.log('SUCCESS!', result.status, result.text);
                    navigate('/emailcheck'); // 密码一致时跳转到指定页面
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                });
        }
    };

    return(
        <div className="register">
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="請輸入電子信箱帳號"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                    required value={email}
                    onChange={handleEmailChange}
                    ref={emailRef}/>
                <input
                    type="password"
                    placeholder="請輸入密碼"
                    pattern="^[a-zA-Z0-9._%+-]{6,20}$"
                    required value={password}
                    onChange={handlePasswordChange}/>
                <input
                    type="password"
                    placeholder="請再次輸入密碼"
                    pattern="^[a-zA-Z0-9._%+-]{6,20}$"
                    required value={confirmPassword}
                    onChange={handleConfirmPasswordChange}/>
                <select required>
                    <option>請選擇符合您的身分的票種</option>
                    <option>全票</option>
                    <option>學生票</option>
                    <option>軍警票</option>
                    <option>孩童票</option>
                    <option>愛心票</option>
                    <option>敬老票</option>
                </select>
                <button type="submit">註冊</button>
            </form>
            
        </div>
    );
    
};

export default Register;