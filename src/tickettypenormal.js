import React from "react";
import "./tickettypenormalCSS.css";

const TicketTypeNormal = () => {
    const calculateTotal = () => {
        const fullQuantity = document.getElementById('fullQuantity').value;
        const discountQuantity = document.getElementById('discountQuantity').value;
    
        const fullPrice = 100;
        const discountPrice = 80;
    
        const fullTotal = fullQuantity * fullPrice;
        const discountTotal = discountQuantity * discountPrice;
    
        document.getElementById('fullTotal').innerText = fullTotal;
        document.getElementById('discountTotal').innerText = discountTotal;
    
        const grandTotal = fullTotal + discountTotal;
        document.getElementById('grandTotal').innerText = grandTotal;
    };

    return(
        <>
            <div className="title">
                <h1>一般票種</h1>
            </div>
            <table>
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
                        <td>優待票</td>
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
        </>
    );
};
export default TicketTypeNormal;