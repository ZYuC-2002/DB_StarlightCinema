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
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search]);
    // useEffect(() => {
    //     cookies.set('userinfo',[username,phonenum,birth],{path:'/'});
    //     console.log(cookies.get('userinfo'))
    // },[username,phonenum,birth]);
    const handleConfirm=()=>{
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