import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes,useNavigate } from "react-router-dom";
import "./paymentPage.css"
import "./App.css"
// import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Navbar from "./upperlistuser";

const PaymentPageAfter = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate=useNavigate();
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const handlePopup = () => {
        setShowPopup(true);
        // 彈出視窗內容的相應內容
    };

    const [search, setSearch] = useState('');
    const cookies = new Cookies();
    const orderdata = cookies.get('selectedOrder');
    var tickettype='';
    if (orderdata.order_ticket_type>0){
        tickettype='一般票';
    }
    else{
        tickettype='優惠票';
    }
    const reserved=orderdata.order_seats.join(' ');


    useEffect(() => {
        cookies.set('search', search, { path: '/' });
        console.log(cookies)
    }, [search, cookies])

    const handleConfirm = async () => {
        if (isChecked) {
            setIsConfirmed(true);
            try {
                // Make a POST request
                const response = await fetch("http://192.168.10.101:5000/pay_order", {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    order_id: orderdata.order_id
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
    const removeorder = async () => {
        if (isChecked) {
            setIsConfirmed(true);
            try {
                // Make a POST request
                const response = await fetch("http://192.168.10.101:5000/delete_order", {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    order_id: orderdata.order_id
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

    return (
    <div>
        <Navbar setSearch={setSearch}/>
        <div className='blank'/>
        <div className="payment-card">
            <div className='information'>
                {/* 到時候再放訂購的東西 */}
                <h2>影城: {orderdata.cinema_name}<br></br>
                    電影: {orderdata.movie_name}<br></br>
                    訂票時間: {orderdata.session_play_date}<br></br>
                    票數: {orderdata.order_seats.length}<br></br>
                    票種: {tickettype}<br></br>
                    座位: {reserved}<br></br>
                    總計: {orderdata.Total_price}<br></br>
                    </h2>
            </div>
            <select>
                <option value="載具輸入">載具輸入</option>
                <option value="郵寄電子發票">郵寄電子發票</option>
                <option value="統編">統編</option>
            </select>
            {/* 輸入載具 */}
            {/* 輸入統編 */}
            <input type="text" placeholder="載具輸入/郵寄電子發票/統編" />
            <input type="text" placeholder="信用卡卡號、安全碼、到期日(月、年))" />
            <input type="text" placeholder="信用卡安全碼" />
            <input type="text" placeholder="信用卡到期日(月、年)" />
            <input type="text" placeholder="(輸入)優惠券 ID" />
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
                <button className='button-payment' onClick={removeorder}>取消訂單</button>
                <Link to={'/Cart'}>
                    <button className='button-payment'>稍後付款</button>
                </Link>
                <button className='button-payment' onClick={handleConfirm}>確認付款</button>
            </div>
        </div>
    </div>

    );
};

export default PaymentPageAfter;