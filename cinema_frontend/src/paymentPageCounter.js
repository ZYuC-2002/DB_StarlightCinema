import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes ,useNavigate} from "react-router-dom";
import "./paymentPage.css"
import "./App.css"
// import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Navbar from "./upperlistuser";

const PaymentPageCounter = () => {
    const navigate=useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [currentDateTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000); // Update every 1000 milliseconds (1 second)
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the effect only once on mount
    const formattedDateTime = `${currentDateTime.getFullYear()}-${(currentDateTime.getMonth() + 1).toString().padStart(2, '0')}-${currentDateTime.getDate().toString().padStart(2, '0')} ${currentDateTime.getHours().toString().padStart(2, '0')}:${currentDateTime.getMinutes().toString().padStart(2, '0')}:${currentDateTime.getSeconds().toString().padStart(2, '0')}`;

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const handleConfirm = async () => {
        if (isChecked) {
            setIsConfirmed(true);
            try {
                // Make a POST request
                const response = await fetch("http://192.168.10.101:5000/submit_order", {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email:cookies.get('userloginemail'),
                    date:formattedDateTime,
                    full_price_ticket:cookies.get('fullPriceTicketNum'),
                    concession_price_ticket:cookies.get('halfPriceTicketNum'),
                    payment_method:0,
                    paid:0,
                    cinema_id:cookies.get('cinema_id'),
                    auditorium_id:cookies.get('auditorium_id'),
                    session_id:cookies.get('session_id'),
                    booking_seat:cookies.get('reservedSeats')
                  }),
                });
            
                const data = await response.json();
            
                // Check if data is successfully fetched
                if (response.ok) {
                  console.log(data);
                } else {
                  console.error('Error fetching data:', data);
                }
              } catch (error) {
                // Handle general error, if needed
                console.error('Error during fetch:', error);
              }
              navigate('/Cart');
        } else {
            alert('請閱讀注意事項並在閱讀後勾選');
        }
    };

    const handlePopup = () => {
        setShowPopup(true);
        // 彈出視窗內容的相應內容
    };

    const [search, setSearch] = useState('');
    const cookies = new Cookies();
    const theater=cookies.get('selectedTheater');
    const movie=cookies.get('selectedMovieTitle');
    const date=cookies.get('choosedate')+' -'+cookies.get('choosetime');
    const ticketnum=cookies.get('fullPriceTicketNum')+cookies.get('halfPriceTicketNum');
    var tickettype='';
    if (cookies.get('fullPriceTicketNum')>0){
        tickettype='一般票';
    }
    else{
        tickettype='優惠票';
    }
    const reserved=cookies.get('reservedSeats').join(' ');
    const totalprice=cookies.get('fullPriceTicketPrice')+cookies.get('halfPriceTicketPrice');


    useEffect(() => {
        cookies.set('search', search, { path: '/' });
        console.log(cookies)
    }, [search, cookies])

    return (
    <div>
        <Navbar setSearch={setSearch}/>
        <div className='blank'/>
        <div className="payment-card">
            <div className='information'>
                {/* 到時候再放訂購的東西 */}
                <h2>影城: {theater}<br></br>
                    電影: {movie}<br></br>
                    場次: {date}<br></br>
                    票數: {ticketnum}<br></br>
                    票種: {tickettype}<br></br>
                    座位: {reserved}<br></br>
                    總計: {totalprice}<br></br>
                    </h2>
            </div>
            <select>
                <option value="載具輸入">載具輸入</option>
                <option value="郵寄電子發票">郵寄電子發票</option>
                <option value="統編">統編</option>
            </select>
            <button onClick={handlePopup}>線上購票-星光電影院付款政策</button>
            {showPopup && (
                <div className="popup">
                    {/* 彈出視窗的內容 */}
                    <p>這是付款政策的內容。</p>
                    <button onClick={() => setShowPopup(false)}>關閉</button>
                </div>
            )}
            {/* <div>
        <label>
            <input type="checkbox" onChange={handleCheck} checked={isChecked} />
            我已詳閱上述規定
        </label>
        </div>       */}
            <div className="checkboxContainer">
                <label className="checkboxLabel">
                    <input type="checkbox" onChange={handleCheck} checked={isChecked} />
                    我已詳閱上述規定
                </label>
            </div>

            <div>
                <Link to={'/Cart'}>
                    <button className='button-payment' >取消訂單</button>
                </Link>
                <button className='button-payment' onClick={handleConfirm}>確認資訊</button>
            </div>
        </div>
    </div>

    );
};

export default PaymentPageCounter;