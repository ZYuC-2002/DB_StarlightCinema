import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './main.css'
import Navbaremployee from './upperlistemployee';
// import SeatPicker from "react-seat-picker";

function Uploadthird(){
    const cookies=new Cookies();
    const navigate=useNavigate();
    const [search, setSearch] = useState('');
    const frontinfo=cookies.get('movieuploadfronttotal');
    const backinfo=cookies.get('movieuploadbacktotal')
    console.log(backinfo);
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
    },[search]);
    const postdata=async ()=>{
        try {
            // Make a POST request
            const response = await fetch("http://192.168.10.101:5000/add_or_update_movie", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                upright_poster: frontinfo[1],
                poster: frontinfo[0],
                rating: backinfo[0],
                name: frontinfo[2],
                eng_name: frontinfo[3],
                release_date: backinfo[1],
                total_sales: backinfo[6],
                summary: frontinfo[4],
                trailer: backinfo[7],
                runtime: backinfo[2],
                type: backinfo[3],
                actor: backinfo[4],
                director: backinfo[5]
              }),
            });
      
            const data = await response.json();
      
            // Check if data is successfully fetched
            if (response.ok) {
              console.log(data);
              navigate('/Uploadfirst');
            } else {
              // Handle fetch error, if needed
              console.error('Error fetching data:', data);
            }
          } catch (error) {
            // Handle general error, if needed
            console.error('Error during fetch:', error);
          }
    }
    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className='blank'/>
            <section className="movieInfo">

                <div className="poster">
                    <img src={frontinfo[1]} alt="" style={{ maxWidth: '100%' }}/>
                </div>

                <div className="infoArea">
                    <h1>{frontinfo[2]}</h1>
                    <h2>{frontinfo[3]}</h2>
                    <time>上映日期：{backinfo[1]}</time>

                    <h3>MOVIE INFO</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>導演：</td>
                                <td><p>{backinfo[5]}</p></td>
                            </tr>
                            <tr>
                                <td>演員：</td>
                                <td><p>{backinfo[4]}</p></td>
                            </tr>
                            <tr>
                                <td>類型：</td>
                                <td><p>{backinfo[3]}</p></td>
                            </tr>
                            <tr>
                                <td>片長：</td>
                                <td><p>{backinfo[2]}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="movieIntro">
                <div className="videoContainer">
                    <iframe
                        src={backinfo[7]}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    >
                    </iframe>
                </div>
                <div className="drama">
                    <h4>劇情簡介</h4>
                    <p>{frontinfo[4]}</p>
                </div>
            </section>
            <Link to={'/Uploadsecond'}>
                <button className='button-back'>BACK</button>
            </Link>
            <button className='button-next' onClick={postdata}>FINISH</button>
        </>
    )
}
export default Uploadthird;