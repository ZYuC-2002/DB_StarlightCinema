import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import SimpleSlider from './postslide';
import Navbar from './upperlistuser';

function Main(){
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className='blank'/>
            <div className='postslider'>
                <SimpleSlider/>
            </div>
        </>
    )
}
export default Main;