import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbaremployee from './upperlistemployee';
// import SeatPicker from "react-seat-picker";

function Uploadsecond(){
    const cookies=new Cookies();
    const [search, setSearch] = useState('');
    const [rating,setRating]=useState('');
    const [r_date,setR_date]=useState('');
    const [runtime,setRuntime]=useState('');
    const [type,setType]=useState('');
    const [actor,setActor]=useState('');
    const [director,setDirector]=useState('');
    const [total_sales,setTotal_sales]=useState('');
    const [trailer,setTrailer]=useState('');

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
    },[search]);

    const handleInputChange1 = (e) => {
        const value = e.target.value;
        setRating(parseInt(value));
      };
    const handleInputChange2 = (e) => {
        const value = e.target.value;
        setR_date(value);
      };
    const handleInputChange3 = (e) => {
        const value = e.target.value;
        setRuntime(value);
      };
    const handleInputChange4 = (e) => {
        const value = e.target.value;
        setType(value);
      };
    const handleInputChange5 = (e) => {
        const value = e.target.value;
        setActor(value);
      };
    const handleInputChange6 = (e) => {
        const value = e.target.value;
        setDirector(value);
      };
    const handleInputChange7 = (e) => {
        const value = e.target.value;
        setTotal_sales(parseInt(value));
      };
    const handleInputChange8 = (e) => {
        const value = e.target.value;
        setTrailer(value);
      };
      useEffect(() => {
        // Use a separate useEffect to set the cookie after the state has been updated
        cookies.set('movieuploadbacktotal', [rating, r_date,runtime,type,actor,director,total_sales,trailer], { path: '/' });
      }, [rating, r_date,runtime,type,actor,director,total_sales,trailer]);
    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className='blank'/>
            <div className='upload'>
                <div className='uploadright'>
                    <h3>Rating</h3>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入rating'
                        onChange={handleInputChange1}
                    />
                    <h3>Release_date</h3>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入Release_date'
                        onChange={handleInputChange2}
                    />
                    <h3>Runtime</h3>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入Runtime'
                        onChange={handleInputChange3}
                    />
                    <h3>Type</h3>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入Type'
                        onChange={handleInputChange4}
                    />
                </div>
                <div className='uploadright'>
                    <h3>Actor</h3>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入Actor'
                        onChange={handleInputChange5}
                    />
                    <h3>Director</h3>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入Director'
                        onChange={handleInputChange6}
                    />
                    <h3>目前票房</h3>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入目前票房'
                        onChange={handleInputChange7}
                    />
                    <h3>預告片連結</h3>
                    <input
                        className='input-upload-ticket'
                        placeholder='輸入預告片連結'
                        onChange={handleInputChange8}
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