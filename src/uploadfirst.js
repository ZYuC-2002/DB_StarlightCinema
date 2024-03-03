import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbaremployee from './upperlistemployee';
// import SeatPicker from "react-seat-picker";

function Uploadfirst(){
    const cookies=new Cookies();
    const [search, setSearch] = useState('');
    const [moviepost,setMoviepost]=useState('');
    const [moviename,setMoviename]=useState('');
    const [movieintro,setMovieintro]=useState('');
    
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search]);

    const handleInputChange1 = (e) => {
        const value = e.target.value;
        setMoviepost(value);
      };
    
      const handleInputChange2 = (e) => {
        const value = e.target.value;
        setMoviename(value);
      };
    
      const handleInputChange3 = (e) => {
        const value = e.target.value;
        setMovieintro(value);
      };
    
      useEffect(() => {
        // Use a separate useEffect to set the cookie after the state has been updated
        cookies.set('movieinfo', [moviepost, moviename, movieintro], { path: '/' });
      }, [moviepost, moviename, movieintro]);
    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className='blank'/>
            <div className='upload'>
                <div className='uploadleft'>
                    <input
                        className='input-upload'
                        placeholder='輸入海報網址'
                        onChange={handleInputChange1}
                    />
                </div>
                <div className='uploadright'>
                    <input
                        className='input-upload-movie-name'
                        placeholder='輸入電影名稱'
                        onChange={handleInputChange2}
                    />
                    <input
                        className='input-upload-movie-intro'
                        placeholder='輸入電影簡介'
                        onChange={handleInputChange3}
                    />
                </div>
            </div>
            <Link to={'/Uploadsecond'}>
                <button className='button-next'>NEXT</button>
            </Link>
        </>
    )
}
export default Uploadfirst;