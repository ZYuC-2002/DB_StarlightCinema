import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbaremployee from './upperlistemployee';
// import SeatPicker from "react-seat-picker";

function Uploadsecond(){
    const cookies=new Cookies();
    const [search, setSearch] = useState('');
    const [pricenormal,setPricenormal]=useState('');
    const [pricespecial,setPricespecial]=useState('');

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
    },[search]);

    const handleInputChange1 = (e) => {
        const value = e.target.value;
        setPricenormal(value);
      };
    const handleInputChange2 = (e) => {
        const value = e.target.value;
        setPricespecial(value);
      };
      useEffect(() => {
        // Use a separate useEffect to set the cookie after the state has been updated
        cookies.set('price', [pricenormal, pricespecial], { path: '/' });
      }, [pricenormal, pricespecial]);
    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className='blank'/>
            <div className='upload'>
                <div className='uploadright'>
                    <h2>一般票價</h2>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入一般票票價'
                        onChange={handleInputChange1}
                    />
                    <h2>特殊票價</h2>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入特殊票票價'
                        onChange={handleInputChange2}
                    />
                </div>
            </div>
            <Link to={'/Uploadfirst'}>
                <button className='button-back'>BACK</button>
            </Link>
            <Link to={'/Uploadthird'}>
                <button className='button-next'>NEXT</button>
            </Link>
        </>
    )
}
export default Uploadsecond;