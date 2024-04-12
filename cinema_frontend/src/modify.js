import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbar from './upperlistuser';
import AvatarSelector from './AvatarSelector';

function Modify(){
    const cookies=new Cookies();
    const login_account=cookies.get('userloginemail')
    const [search, setSearch] = useState('');
    const [username, setUsername] = useState(cookies.get('userloginname'));
    const [phonenum, setPhonenum] = useState(cookies.get('userloginphone'));
    const [birth, setBirth] = useState(cookies.get('userloginbirthday'));
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search]);
    
    const handleConfirm=async ()=>{
        cookies.set('userinfo',[username,phonenum,birth],{path:'/'});
        console.log(cookies.get('userinfo'))
        try {
            // Make a POST request
            const response = await fetch("http://192.168.10.101:5000/member_change_info", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: login_account,
                name: username,
                birthday: birth,
                phone:phonenum
              }),
            });
      
            const data = await response.json();
      
            // Check if data is successfully fetched
            if (response.ok) {
              console.log(data);
              cookies.set('userloginname',username,{path:'/'});
              cookies.set('userloginphone',phonenum,{path:'/'});
              cookies.set('userloginbirthday',birth,{path:'/'});
            } else {
              // Handle fetch error, if needed
              console.error('Error fetching data:', data);
            }
          } catch (error) {
            // Handle general error, if needed
            console.error('Error during fetch:', error);
          }
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
                        defaultValue= {login_account}
                        disabled
                    />
                    <input
                        className='input-modify'
                        placeholder='使用者名稱'
                        defaultValue= {username}
                        onChange={(e) => {
                        setUsername(e.target.value);
                        }}
                    />
                    <input
                        className='input-modify'
                        placeholder='使用者手機號碼'
                        defaultValue= {phonenum}
                        onChange={(e) => {
                        setPhonenum(e.target.value);
                        }}
                    />
                    <input
                        className='input-modify'
                        placeholder='使用者生日'
                        defaultValue= {birth}
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