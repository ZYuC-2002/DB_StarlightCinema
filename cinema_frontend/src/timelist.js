import React, {useState, useEffect} from "react";
import "./timelist.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const TimeList = () => {
    const cookies=new Cookies();
    const navigate = useNavigate();
    const selectversion=cookies.get('selectedVersion');
    const selecttheater=cookies.get('selectedTheater');
    const selectmovie=cookies.get('selectedMovieTitle');
    const [d_date,setD_date]=useState('2024-11-11');
    const [d_time,setD_time]=useState(['12:00']);
    const [d_session_id,setD_session_id]=useState(0);
    const [d_date1,setD_date1]=useState('2024-11-11');
    const [d_session_id1,setD_session_id1]=useState(0);
    const [d_time1,setD_time1]=useState(['12:00']);
    const [d_date2,setD_date2]=useState('2024-11-11');
    const [d_session_id2,setD_session_id2]=useState(0);
    const [d_time2,setD_time2]=useState(['12:00']);

    const showTimes = {
        '01': {
            date:d_date,
            times: d_time,
            session_id:d_session_id
        },
        '02': {
            date:d_date1,
            times: d_time1,
            session_id:d_session_id1
        },
        '03': {
            date:d_date2,
            times: d_time2,
            session_id:d_session_id2
        },
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://192.168.10.101:5000/get_movie_session", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                cinema_name: selecttheater,
                movie_name: selectmovie,
                play_version: selectversion
              }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
              console.log(data);
              // Assuming data has a structure similar to showTimes
              cookies.set('concession_price',data[0]['concession_price'],{path:'/'});
              cookies.set('full_price',data[0]['full_price'],{path:'/'});
              cookies.set('cinema_id',data[0]['cinema_id'],{path:'/'});
              cookies.set('auditorium_id',data[0]['auditorium_id'],{path:'/'});
              setD_date(data[0]["play_date"].substring(0, 10));
              setD_time([data[0]["play_date"].substring(10)]);
              setD_session_id(data[0]["session_id"]);
              setD_date1(data[1]["play_date"].substring(0, 10));
              setD_time1([data[1]["play_date"].substring(10)]);
              setD_session_id1(data[1]["session_id"]);
              setD_date2(data[2]["play_date"].substring(0, 10));
              setD_time2([data[2]["play_date"].substring(10)]);
              setD_session_id2(data[2]["session_id"]);
            } else {
              console.error('Error fetching data:', data);
            }
          } catch (error) {
            console.error('Error during fetch:', error);
          }
        };
    
        fetchData();
      }, [selecttheater, selectmovie, selectversion]);
    const choosetime = (key,timeIndex) =>{
        cookies.set('choosetime',showTimes[key].times[timeIndex]);
        cookies.set('choosedate',[showTimes[key].date]);
        cookies.set('session_id', showTimes[key].session_id);
        console.log(cookies.get('session_id'));
        navigate('/Tickettypenormal');
    }

    return(
        <>
            {Object.keys(showTimes).map((key) => (
                <div className="timelist" key={key}>
                    <h3>
                        {showTimes[key].date}
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