import React, { useState, useEffect } from "react";
import "./timelistCSS.css";
import { Link } from "react-router-dom";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";

const TimeList = () => {
    var showTimes = {
        '01': {
            year: "2023",
            month: "11",
            day: "20",
            week: "一",
            times: ['18:05']
        },
        '02': {
            year: "2023",
            month: "11",
            day: "21",
            week: "二",
            times: ['13:20', '18:05']
        },
        '03': {
            year: "2023",
            month: "11",
            day: "22",
            week: "三",
            times: ['13:20', '18:05']
        },
    }

    const [choosetime, setTime] = useState('');
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
    },[search])

    const handleTimeClick = (selectedTime) => {
        setTime(selectedTime);
        // 將選擇的時間存儲到Cookie中
        cookies.set('choosetime', selectedTime, { path: '/' });
    }

    return (
        <>
            {Object.keys(showTimes).map((key) => (
                <div className="timelist" key={key}>
                    <h3>
                        {showTimes[key].year}年{showTimes[key].month}月
                        {showTimes[key].day}日 星期{showTimes[key].week}
                    </h3>
                    <div className="timeSeat">
                        {showTimes[key].times.map((time, timeIndex) => (
                            <>
                                <div className="button-style" key={timeIndex}>
                                    <Link to={'/PaymentChoose'} onClick={() => handleTimeClick(time)}>
                                        {time}
                                    </Link>
                                </div>
                                <img src={process.env.PUBLIC_URL + "seat.png"} alt="" width="27" height="25" />
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default TimeList;
