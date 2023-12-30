import React, {useState, useEffect} from "react";
import "./timelist.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

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
    const cookies=new Cookies();
    const navigate = useNavigate();
    const choosetime = (key,timeIndex) =>{
        cookies.set('choosetime',showTimes[key].times[timeIndex]);
        console.log(cookies.get('choosetime'));
        navigate('/Tickettypenormal');
    }

    return(
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
                                <button onClick={() => choosetime(key, timeIndex)} key={timeIndex}>{time}</button>
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