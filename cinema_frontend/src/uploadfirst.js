import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbaremployee from './upperlistemployee';
// import SeatPicker from "react-seat-picker";

function Uploadfirst(){
    const cookies=new Cookies();
    const [search, setSearch] = useState('');
    const [moviehorizontalpost,setMoviehorizontalpost] = useState('');
    const [moviepost,setMoviepost]=useState('');
    const [moviename,setMoviename]=useState('');
    const [movieengname,setMovieengname]=useState('');
    const [movieintro,setMovieintro]=useState('');
    
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search]);
    const handleInputChange0 = (e) => {
        const value = e.target.value;
        setMoviehorizontalpost(value);
      };

    const handleInputChange1 = (e) => {
        const value = e.target.value;
        setMoviepost(value);
      };
    
      const handleInputChange2 = (e) => {
        const value = e.target.value;
        setMoviename(value);
      };

      const handleInputChange5 = (e) => {
        const value = e.target.value;
        setMovieengname(value);
      };
    
      const handleInputChange3 = (e) => {
        const value = e.target.value;
        setMovieintro(value);
      };
    
      useEffect(() => {
        // Use a separate useEffect to set the cookie after the state has been updated
        cookies.set('movieuploadfronttotal', [moviehorizontalpost,moviepost, moviename, movieengname,movieintro], { path: '/' });
      }, [moviehorizontalpost,moviepost, moviename, movieengname,movieintro]);
    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className='blank'/>
            <div className='upload'>
                <div className='uploadleft'>
                    <input
                        className='input-upload'
                        placeholder='輸入直式海報網址'
                        onChange={handleInputChange1}
                    />
                    <input
                        className='input-upload'
                        placeholder='輸入首頁橫式海報網址'
                        onChange={handleInputChange0}
                    />
                </div>
                <div className='uploadright'>
                    <input
                        className='input-upload-movie-name'
                        placeholder='輸入電影中文名稱'
                        onChange={handleInputChange2}
                    />
                    <input
                        className='input-upload-movie-name'
                        placeholder='輸入電影英文名稱'
                        onChange={handleInputChange5}
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