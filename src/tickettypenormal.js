import React, {useState, useEffect} from "react";
import "./tickettypenormal.css";
import "./main.css"
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

const TicketTypeNormal = () => {
    const calculateTotal = () => {
        const fullQuantity = document.getElementById('fullQuantity').value;
        const discountQuantity = document.getElementById('discountQuantity').value;

        // 將 fullPriceTicketNum 更新為全票數量
        setFull(parseInt(fullQuantity));
        setHalf(parseInt(discountQuantity));
    
        const fullPrice = 100;
        const discountPrice = 80;
    
        const fullTotal = fullQuantity * fullPrice;
        const discountTotal = discountQuantity * discountPrice;
    
        document.getElementById('fullTotal').innerText = fullTotal;
        document.getElementById('discountTotal').innerText = discountTotal;
    
        const grandTotal = fullTotal + discountTotal;
        document.getElementById('grandTotal').innerText = grandTotal;
    };

    const [search, setSearch] = useState('');
    const cookies=new Cookies();
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    const [fullPriceTicketNum, setFull] = useState(0);
    const [halfPriceTicketNum, setHalf] = useState(0);

    useEffect(() => {
        cookies.set('fullPriceTicketNum',fullPriceTicketNum,{path:'/'});
        cookies.set('halfPriceTicketNum',halfPriceTicketNum,{path:'/'});
    },[fullPriceTicketNum, halfPriceTicketNum])

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className="tickettypenormal">
                <div className="title">
                    <h1>一般票種</h1>
                </div>
                <table className="ticketnormal">
                    <thead>
                        <tr>
                            <th>票種</th>
                            <th>價格</th>
                            <th>數量</th>
                            <th>合計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>全票</td>
                            <td id="fullPrice">100</td>
                            <td>
                                <select id="fullQuantity" onChange={calculateTotal}>
                                    {[...Array(11).keys()].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td id="fullTotal">0</td>
                        </tr>
                        <tr>
                            <td>
                                <p>優待票</p>
                                <p className="comment">優待票包括學生票、軍警票、孩童票；購買優待票者，需於進場驗票時出示相關優待證件，無證件者須補費至全票金額。</p>
                            </td>
                            <td id="discountPrice">80</td>
                            <td>
                                <select id="discountQuantity" onChange={calculateTotal}>
                                    {[...Array(11).keys()].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td id="discountTotal">0</td>
                        </tr>
                        <tr>
                            <td colSpan="3" id="total">總計</td>
                            <td id="grandTotal">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link to={'/Timelist'}>
                <button className='button-back'>BACK</button>
            </Link>
            <Link to={'/Seatselect'}>
                <button className='button-next'>Next</button>
            </Link>
        </>
    );
};
export default TicketTypeNormal;