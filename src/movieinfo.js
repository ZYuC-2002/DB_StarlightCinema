import React, {useState, useEffect} from "react";
import "./movieinfo.css";
import { Link } from "react-router-dom";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";

const MovieInfo = () => {
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search, cookies])

    var movieDetails = {
        img: '/theboyandtheheron.jpg',
        level: "普遍級",
        movieChiName: "蒼鷺與少年",
        movieEngName: "The Boy and the Heron",
        date: "2023/10/06",
        info: (
            <>
                <p>★動畫大師宮崎駿睽違10年全新力作！</p>
                <p>★破天荒「零宣傳」策略轟動全球，橫掃日本票房80億！</p>
                <p>★上映首四日票房打破《神隱少女》紀錄，累積超過400萬觀影人次！</p>
                <p>動畫大師宮﨑駿繼《風起》後，睽違10年再次製作動畫長片。</p>
                <p>-甲上</p>
            </>
        ),
        director: "宮﨑駿",
        actors: "-",
        type: "劇情",
        time: "2時4分",
        src: "https://www.youtube.com/embed/evZLK0h_Fqo?si=A9xjQoUHdz0LHF7R"
    }

    const screeningVersions = {
        versions: ['2D', '3D', 'IMAX'],
        theaters: {
            '2D': ['星光影城', '陽光影城', '月光影城'],
            '3D': ['星光影城', '陽光影城', '月光影城'],
            'IMAX': ['星光影城', '陽光影城', '月光影城'],
        }
    };
    const [selectedVersion, setSelectedVersion] = useState(null);

    const handleVersionClick = (event, version) => {
        event.preventDefault();
        setSelectedVersion(version);
        cookies.set('selectedVersion', version, { path: '/' });
    };
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
                                            <Link to={'/TimeList'}>
                                                <li key={theaterIndex} id="theater">{theater}</li>
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