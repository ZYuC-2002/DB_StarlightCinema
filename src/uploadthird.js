import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbaremployee from './upperlistemployee';
// import SeatPicker from "react-seat-picker";

function Uploadthird(){
    const cookies=new Cookies();
    const [search, setSearch] = useState('');
    const movieinfo=cookies.get('movieinfo');
    const price=cookies.get('price')

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
    },[search]);

    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className='blank'/>
            <div className='upload'>
                <div className='uploadleft'>
                    <img src={movieinfo[0]} width={'400'}/>
                </div>
                <div className='uploadright'>
                    <h2>電影名稱</h2>
                    <p>{movieinfo[1]}</p>
                    <h2>電影簡介</h2>
                    <p>{movieinfo[2]}</p>
                    <h2>一般票票價</h2>
                    <p>{price[0]}</p>
                    <h2>特殊票票價</h2>
                    <p>{price[1]}</p>
                </div>
            </div>
            <Link to={'/Uploadsecond'}>
                <button className='button-back'>BACK</button>
            </Link>
            <Link to={'/Uploadfirst'}>
                <button className='button-next'>FINISH</button>
            </Link>
        </>
    )
}
export default Uploadthird;