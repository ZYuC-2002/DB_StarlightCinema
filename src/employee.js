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
            <h1>宣傳海報上傳</h1>
        </>
    )
}
export default Employeemain;