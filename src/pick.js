import SeatPicker from "./seatpick";
import './main.css'
import Navbar from './upperlistuser';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";

function Seatselect(){
    const [totalSeats, setTotalSeats] = useState(0);
    const [reservedSeatsCount, setReservedSeatsCount] = useState(0);
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    useEffect(() => {
        // Retrieve fullPriceTicketNum and halfPriceTicketNum from cookies
        const fullPriceTicketNum = parseInt(cookies.get('fullPriceTicketNum')) || 0;
        const halfPriceTicketNum = parseInt(cookies.get('halfPriceTicketNum')) || 0;
    
        // Calculate total number of allowed seats
        const total = fullPriceTicketNum + halfPriceTicketNum;
        setTotalSeats(total);
      }, [totalSeats]);

      const handleReservedSeatsCountChange = (count) => {
        setReservedSeatsCount(count);
      };
    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className="blank"/>
            <div className="main-container">
                <div className="screenanddoor">
                    <div className="escapedoor-left"/>
                    <div className="cinema-screen"/>
                    <div className="escapedoor-right"/>
                </div>
                <SeatPicker totalSeats={totalSeats} onReservedSeatsCountChange={handleReservedSeatsCountChange}/>
            </div>
            <Link to={'/Tickettypenormal'}>
                <button className='button-back'>BACK</button>
            </Link>
            <Link to={'/PaymentChoose'}>
                <button className='button-next' disabled={reservedSeatsCount !== totalSeats}>Next</button>
            </Link>
        </>
    )
}
export default Seatselect;