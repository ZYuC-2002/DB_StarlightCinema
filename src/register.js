import React, {useState, useRef,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./register.css";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";

const Register = () => {
    const [text, setName] = useState('');
    const [date, setBirthdate] = useState('');
    const [tel, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleBirthdateChange = (event) => {
        setBirthdate(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

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
    const nameRef = useRef(null);

    const API_ENDPOINT = "http://192.168.10.101:5000/member_register";
    
    const [messages, setMessages] = useState(null);
    const [messageApiError, setMessageApiError] = useState(null);
    const [postMessageError, setPostMessageError] = useState();

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

    // 第二個參數傳入 [] 代表只在 componet mount 後執行
    useEffect(() => {
        fetchMessages();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        alertMessage(); // 在提交前检查密码是否一致

        /* submit */
        if (isSubmitEnabled) {
            // API
            fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    name: text,
                    password: password,
                    birthday: date,
                    phone: tel,
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

            /* send email */
            emailjs.send("service_aq2wl0k","template_g4hcvlv",{ email: emailRef.current.value , name: nameRef.current.value}, "dHTKHVHTtwI7cqz5g")
                .then(function(result) {
                    console.log('SUCCESS!', result.status, result.text);
                    navigate('/emailcheck'); // 密码一致时跳转到指定页面
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
    },[search])

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <div className="inputName">
                        <div className="nameLabel">姓名:</div>
                        <input
                            type="register-text"
                            placeholder="Name"
                            required value={text}
                            onChange={handleNameChange}
                            ref={nameRef}
                        />
                    </div>
                    <div className="inputBirthdate">
                        <div className="birthdateLabel">生日:</div>
                        <input
                            type="date"
                            required value={date}
                            onChange={handleBirthdateChange}
                        />
                    </div>
                    <div className="inputPhone">
                        <div className="phoneLabel">手機號碼:</div>
                        <input
                            type="register-tel"
                            placeholder="Phone"
                            required value={tel}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="inputEmail">
                        <div className="emailLabel">電子信箱:</div>
                        <input
                            type="register-email"
                            placeholder="Email"
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                            required value={email}
                            onChange={handleEmailChange}
                            ref={emailRef}
                        />
                    </div>
                    <div className="inputPassword">
                        <div className="passwordLabel">密碼:</div>
                        <input
                            type="register-password"
                            placeholder="Password"
                            pattern="^[a-zA-Z0-9._%+-]{6,20}$"
                            required value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="inputConfirmPassword">
                        <div className="confirmPasswordLabel">確認密碼:</div>
                        <input
                            type="register-password"
                            placeholder="Confirm Password"
                            pattern="^[a-zA-Z0-9._%+-]{6,20}$"
                            required value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>

                    <button type="submit">註冊</button>
                </form>
                
            </div>
        </>
    );
    
};

export default Register;