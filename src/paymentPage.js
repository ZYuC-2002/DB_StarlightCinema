import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./paymentPage.css"
import "./App.css"
// import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Navbar from "./upperlistuser";

const PaymentPage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const handleConfirm = () => {
        if (isChecked) {
            setIsConfirmed(true);
            // 確認付款的相應操作
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
                <h2>影城: <br></br>
                    電影: <br></br>
                    場次:(日期 時間)<br></br>
                    票數: <br></br>
                    票種: <br></br>
                    手續費: <br></br>
                    總計:<br></br>
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
                <button className='button-payment' onClick={() => console.log('取消付款')}>取消付款</button>
                <button className='button-payment' onClick={handleConfirm}>確認付款</button>
            </div>
        </div>
    </div>

    );
};

export default PaymentPage;