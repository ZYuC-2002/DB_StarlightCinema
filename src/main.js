import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import SimpleSlider from './postslide';
import Navbar from './upperlistuser';
// import SeatPicker from "react-seat-picker";

function Main(){
    const cookies=new Cookies();
    const [search, setSearch] = useState('');
    cookies.set('cart',[
        { id: 1, name: "Top Gun", price: 350, quantity: 2 ,type:"normal"},
        { id: 2, name: "君たちはどう生きるか", price: 280, quantity: 1,type:"student" }
      ]);
    cookies.set('user_info',{account:cookies.get('account'),name:"Thomas",phonenum:"0903260768",birth:"2003/06/11"});
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search]);

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className='blank'/>
            <div className='postslider'>
                <SimpleSlider/>
            </div>
            <Link to={'/EmployeeLogin'}>
                <button className='button-employeelogin'>員工登入</button>
            </Link>
        </>
    )
}
export default Main;