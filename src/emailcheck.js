import React from "react";
import { useNavigate } from "react-router-dom";
import "./emailcheck.css";

export const EmailCheck = () => { 
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/Login');
    };

    return(
        <div className="checkEmail">
            <h4>
                請至電子郵件確認帳號註冊<p/>按下確認按鈕後<p/>再返回登入頁面進行登入
            </h4>
            <button className="goBack" onClick={goBack}>返回登入頁面</button>
        </div>
    );
};

export default EmailCheck;