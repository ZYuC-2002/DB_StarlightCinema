import React, {useState, useEffect} from "react";
import "./timelist.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const TimeList = () => {
    var showTimes = {
        '01': {
            year: "2024",
            month: "01",
            day: "11",
            week: "四",
            times: ['18:05']
        },
        '02': {
            year: "2023",
            month: "01",
            day: "12",
            week: "五",
            times: ['13:20', '18:05']
        },
        '03': {
            year: "2023",
            month: "01",
            day: "13",
            week: "六",
            times: ['13:20', '18:05']
        },
    }
    const cookies=new Cookies();
    const navigate = useNavigate();
    console.log(cookies.get('selectedVersion'),cookies.get('selectedTheater'));
    const choosetime = (key,timeIndex) =>{
        cookies.set('choosetime',showTimes[key].times[timeIndex]);
        cookies.set('choosedate',[showTimes[key].year,'/',showTimes[key].month,'/',showTimes[key].day]);
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