import React, {useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./paymentChoose.css";
import "./App.css"
// import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Navbar from "./upperlistuser";
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const PaymentChoose = () => {
    const [isRead, setIsRead] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [search, setSearch] = useState('');
    const cookies = new Cookies();
    const navigate=useNavigate();

    const handleCheck = () => {
        setIsRead(!isRead);
        cookies.set('isRead', !isRead, { path: '/' });
    };

    const handleConfirm = () => {
        if (isRead) {
            // 當確認時執行的動作
            cookies.set('isConfirmed', true, { path: '/' });
            // 處理其他操作或導航到訂單頁面
            navigate('/PaymentPage');
        } else {
            alert('請閱讀注意事項並在閱讀後勾選');
            cookies.set('isConfirmed', true, { path: '/PaymentChoose' });
        }
    };

    useEffect(() => {
        cookies.set('search', search, { path: '/' });
    }, [search, cookies]);

    useEffect(() => {
        cookies.set('payway', paymentMethod, { path: '/' });
        console.log(paymentMethod)
    }, [paymentMethod]);

    useEffect(() => {
        const isReadFromCookie = cookies.get('isRead');
        if (isReadFromCookie !== undefined) {
            setIsRead(isReadFromCookie === 'true');
        }
    }, []);

    

    return (
    <>
        <Navbar setSearch={setSearch}/>
        <div className='blank'/>
        <div>
            <div>
                <h3>
                    請注意！星光電影院絕不會要求顧客至 ATM操作解除分期或補繳金額，請貴賓提高警覺避免受騙。星光電影院與您一起防範詐騙；歡迎致電影院查詢更多反詐騙資訊。
                </h3>
            </div>
                    {/* 線上即時付款 */}
                    <div className="buttonContainer">
                        <label>
                            <input
                                type="checkbox"
                                checked={paymentMethod === 'onlinePayment'}
                                onChange={() => setPaymentMethod('onlinePayment')}
                            />
                            <div className="paymentCard">
                                <h2>線上即時付款</h2>
                                <button
                                    className="paymentButton"
                                    onClick={() => console.log('臨櫃付款')}
                                >
                                    <h3>一般 / 銀行優惠 / 儲值金會員票</h3>
                                    <h3>GENERAL / BANK PRIVILEGE TICKET / iShow SVC DISCOUNT TICKET</h3>
                                </button>
                            </div>
                        </label>
                    </div>

                    {/* 影城臨櫃付款 */}
                    <div className="buttonContainer">
                        <label>
                            <input
                                type="checkbox"
                                checked={paymentMethod === 'counterPayment'}
                                onChange={() => setPaymentMethod('counterPayment')}
                            />
                            <div className="paymentCard">
                                <h2>影城臨櫃付款</h2>
                                <button
                                    className="paymentButton"
                                    onClick={() => console.log('信用卡付款')}
                                >
                                    <h3>團體優待票券 / 愛心票 / 敬老票 / 免費兌換券</h3>
                                    <h3>CORPORATE MOVIE MONEY / DISABILITY TICKET / ELDERLY TICKET / READMISSION</h3>
                                </button>
                            </div>
                        </label>
                    
                </div>
            <div>
                <h2>注意事項</h2>
                <h3>一、訂票及取票規定[一般票種]</h3>
                <p> 1.網路訂票每張票需加收NT$20手續費<br></br>
                    2.片長 150分鐘(含)以上之電影需加價NT$20，每增加30分鐘需另再加價NT$10。<br></br>
                    3.每筆訂票張數以 10 張為限。儲值金會員票每日訂票張數以10張為限。<br></br>
                    4.銀行優惠票種與儲值金會員票無法於同筆訂單中，請分次訂購，唯兩筆訂票無法保證座位。<br></br>
                    5.各銀行優惠票種之張數與折扣金額，請依各銀行信用卡優惠規則為準。銀行優惠票種預訂以電影播放日期為準，非刷卡日計算。每卡每日購買張數限制依影片版本與觀影日期相關規定限制。<br></br>
                    6.請注意此交易金額將於購票步驟完成後，即刻於您的信用卡帳戶或儲值金帳戶中進行扣款。<br></br>
                    7.購票完成後，請憑「訂票序號」至購票影城進行取票，亦可至超商進行取票，但若交易內含餐飲品項，須至購票影城臨櫃領取電影票與餐點。<br></br>
                    8.消費者訂購電影票後，威秀影城仍保留影廳更換之權利，如有任何變更將於場次當日臨櫃告知，敬請見諒；其餘未盡事項依影城現場公告為主。<br></br>
                </p>
                <h3>二、退換票規定[一般票種]</h3>
                <p> 1.線上購票後若已領取電影票，因故無法如期觀影，請於開演前 20 分鐘持未使用之電影票與原訂購之信用卡親至觀影影城辦理退換票。已取票或取餐者，無法進行線上退款。<br></br>
                    2.線上購票後若尚未領取電影票，因故無法如期觀影，可於威秀影城官網登入會員訂票紀錄中進行線上退票，電影票最遲應於影片開演2小時前完成線上退票程序。<br></br>
                    3.電影票遺失恕不補發，亦無法辦理退換票。線上購票完成後退、換票，訂票手續費恕不退還，且不保證相同座位。<br></br>
                    4.因天災或特殊事故取消電影放映時，請於購票場次7日內憑『未使用之原票券』至原購票影城櫃台辦理退換票，影城未營業期間均不收取手續費。<br></br>
                    5.退、換票注意事項：若是信用卡付款，則需攜帶購票之信用卡辦理退票（如未攜帶原購票信用卡，恕無法辦理退換票）。<br></br>
                    6.其餘未盡事項依影城現場公告為主。<br></br>
                </p>
            </div>
            <div className='turn'>
                <div className='check'>
                    <input type="checkbox" onChange={handleCheck} checked={isRead} />
                    <label>我已詳閱上述規定</label>
                </div>
                <div className='pageto'>
                <Link to={'/Seatselect'}>
                    <button onClick={() => console.log('返回上頁')}>返回上頁</button>   
                </Link>
                <button onClick={handleConfirm}>前往訂單</button>
                </div>
            </div>

        </div>
    </>

    );
};

export default PaymentChoose;
