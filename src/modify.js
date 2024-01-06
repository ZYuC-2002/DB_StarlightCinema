import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbar from './upperlistuser';
import AvatarSelector from './AvatarSelector';

function Modify(){
    const cookies=new Cookies();
    const default_value=cookies.get('user_info');
    const [search, setSearch] = useState('');
    const [username, setUsername] = useState(default_value['name']);
    const [phonenum, setPhonenum] = useState(default_value['phonenum']);
    const [birth, setBirth] = useState(default_value['birth']);
    
    // API
    const API_ENDPOINT = "http://192.168.10.101:5000/user_change_info";
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
    
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search]);

    const selectedAvatar = cookies.get('selectedAvatar');
    const handleConfirm=()=>{
        // API
        fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email_account: default_value['account'],
                user_name: username,
                birth: birth,
                phonenumb: phonenum,
                user_pic: {selectedAvatar},
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

        cookies.set('userinfo',[username,phonenum,birth],{path:'/'});
        console.log(cookies.get('userinfo'))
    }

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className='blank'/>
            <div className='modify-container'>
                <AvatarSelector/>
                <div className='modify-text-container'>
                    <input
                        className='input-modify'
                        placeholder='使用者帳號'
                        defaultValue= {default_value['account']}
                        disabled
                    />
                    <input
                        className='input-modify'
                        placeholder='使用者名稱'
                        defaultValue= {default_value['name']}
                        onChange={(e) => {
                        setUsername(e.target.value);
                        }}
                    />
                    <input
                        className='input-modify'
                        placeholder='使用者手機號碼'
                        defaultValue= {default_value['phonenum']}
                        onChange={(e) => {
                        setPhonenum(e.target.value);
                        }}
                    />
                    <input
                        className='input-modify'
                        placeholder='使用者生日'
                        defaultValue= {default_value['birth']}
                        onChange={(e) => {
                        setBirth(e.target.value);
                        }}
                    />
                    <Link to={'/ForgetPassword'}>
                        <button className='changepassword'>
                            修改密碼
                        </button>
                    </Link>
                </div>
            </div>
            <button className='button-next' onClick={handleConfirm}>儲存資料</button>
        </>
    )
}
export default Modify;