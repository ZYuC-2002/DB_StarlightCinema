import React, {useState, useEffect} from "react";
import "./movieinfo.css";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";
import YouTube from 'react-youtube';


const MovieInfo = () => {
    const [search, setSearch] = useState('');
    const [img,setImg] = useState('/theboyandtheheron.jpg');
    const [level,setLevel] = useState("普遍級");
    const [movieChiName,setMovieChiName] = useState("蒼鷺與少年");
    const [movieEngName,setMovieEngName] = useState("The Boy and the Heron");
    const [moviedate,setDate] = useState("2023-10-06");
    const [info,setInfo] = useState("痾");
    const [director,setDirector] = useState("宮﨑駿");
    const [actors,setActors] = useState("-");
    const [type,setType] = useState("劇情");
    const [time,setTime] = useState("2時4分");
    const [introsrc,setIntrosrc] = useState("https://www.youtube.com/embed/evZLK0h_Fqo?si=A9xjQoUHdz0LHF7R");

    const cookies=new Cookies();
    const selectedMovieTitle = cookies.get('selectedMovieTitle');
    const url = `http://192.168.10.101:5000/get_movie_detail?movie_name=${encodeURIComponent(selectedMovieTitle)}`;
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])
    useEffect(()=>{
        cookies.set('choose_movie',movieDetails.movieChiName,{path:'/'});
    },[])
    var movieDetails = {
        img: img,
        level: level,
        movieChiName: movieChiName,
        movieEngName: movieEngName,
        date: moviedate,
        info: info,
        director: director,
        actors: actors,
        type: type,
        time: time,
        src: introsrc
    }

    const screeningVersions = {
        versions: ['2D', '3D', 'IMAX'],
        theaters: {
            '2D': ['星光電影院', '陽光影城', '月光影城'],
            '3D': ['星光電影院', '陽光影城', '月光影城'],
            'IMAX': ['星光電影院', '陽光影城', '月光影城'],
        }
    };
    const [selectedVersion, setSelectedVersion] = useState(null);
    const navigate=useNavigate();
    const handleVersionClick = (event, version) => {
        event.preventDefault();
        setSelectedVersion(version);
        cookies.set('selectedVersion', version, { path: '/' });   
    };
    const choosetheater=(event,theater)=>{
        event.preventDefault();
        cookies.set('selectedTheater', theater, { path: '/' });
        navigate('/Timelist');
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const responseData = await response.json();
            setImg(responseData['upright_poster']);
            setActors(responseData['actor']);
            setDirector(responseData['director']);
            setInfo(responseData['summary']);
            setIntrosrc(responseData['trailer']);
            setDate(responseData['release_date']);
            setLevel(responseData['rating']);
            setMovieChiName(responseData['name']);
            setMovieEngName(responseData['eng_name']);
            setType(responseData['type']);
            setTime(responseData['runtime']);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    return(
        <>  
            <Navbar setSearch={setSearch}/>
            <div className="blank"/>
            <section className="movieInfo">

                <div className="poster">
                    <img src={movieDetails['img']} alt="" style={{ maxWidth: '100%' }}/>
                </div>

                <div className="infoArea">
                    <h1>{movieDetails['movieChiName']}</h1>
                    <h2>{movieDetails['movieEngName']}</h2>
                    <time>上映日期：{movieDetails['date']}</time>

                    <h3>MOVIE INFO</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>導演：</td>
                                <td><p>{movieDetails['director']}</p></td>
                            </tr>
                            <tr>
                                <td>演員：</td>
                                <td><p>{movieDetails['actors']}</p></td>
                            </tr>
                            <tr>
                                <td>類型：</td>
                                <td><p>{movieDetails['type']}</p></td>
                            </tr>
                            <tr>
                                <td>片長：</td>
                                <td><p>{movieDetails['time']}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="versionSelection">
                    <h4>放映版本</h4>
                    <ul className="versionList">
                        {screeningVersions.versions.map((version, index) => (
                            <li key={index} className={selectedVersion === version ? 'active' : ''} id="version">
                                {/* a的問題 */}
                                <a onClick={(e) => handleVersionClick(e, version)}>
                                    {version}
                                </a>
                                {selectedVersion === version && (
                                    <ul className="theaterList">
                                        {screeningVersions.theaters[version].map((theater, theaterIndex) => (
                                        <Link>
                                            <li key={theaterIndex} id="theater" onClick={(e) => choosetheater(e,theater)}>{theater}</li>
                                        </Link>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="movieIntro">
                <div className="videoContainer">
                    <iframe
                        src={movieDetails['src']}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    >
                    </iframe>
                    {/* <YouTube
                        videoId='https://www.youtube.com/watch?v=rsOeH0q8egc&ab_channel=%E5%8F%B2%E4%B8%B9%E5%88%A9%E8%A6%96%E8%A7%92%E7%9A%84%E9%AB%94%E8%82%B2%E4%B8%96%E7%95%8C&key=AIzaSyCiskG1wdpvAizGVJGBQhvXEbhPhhimibs'
                    /> */}
                </div>
                <div className="drama">
                    <h4>劇情簡介</h4>
                    <p>{movieDetails['info']}</p>
                </div>
            </section>
        </>
    );
};

export default MovieInfo;