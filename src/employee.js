import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbaremployee from './upperlistemployee';


function Employeemain(){
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
    },[search])

    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className='blank'/>
            <div className='employeemainButton'>
                <form action="/Uploadfirst">
                    <input type="submit" value="上架電影" />
                </form>
                <form action="/RemoveMovie">
                    <input type="submit" value="下架電影" />
                </form>
                <form action="/UploadPoster">
                    <input type="submit" value="上傳海報" />
                </form>
                <form action="/TheaterStatus">
                    <input type="submit" value="場次銷售狀況" />
                </form>
                <form action="/Advicereply">
                    <input type="submit" value="客服收信及回信" />
                </form>
                <form className='employeelogout' action="/">
                    <input type="submit" value="登出" />
                </form>
            </div>
        </>
    )
}
export default Employeemain;