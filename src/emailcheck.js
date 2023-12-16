import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./emailcheckCSS.css";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";

export const EmailCheck = () => { 
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/Login');
    };

    const [search, setSearch] = useState('');

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className="checkEmail">
                <h4>
                    請至電子郵件確認帳號註冊<p/>按下確認按鈕後<p/>再返回登入頁面進行登入
                </h4>
                <button className="goBack" onClick={goBack}>返回登入頁面</button>
            </div>
        </>
    );
};

export default EmailCheck;