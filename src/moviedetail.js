import React, {useState, useEffect} from "react";
import "./moviedetail.css";
import { Link } from "react-router-dom";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";

const MovieDetail = () => {
    var movieDetails = {
        '01': {
            img: '/kimitachiwadouikiruka_vertical.jpg',
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
        },
        '02': {
            img: '/scale_vertical.jpg',
            level: "普遍級",
            movieChiName: "明天星期一",
            movieEngName: "Mondays: See You This Week!",
            date: "2023/10/20",
            info: (
                <>
                    <p>吉川和他的同事們在一家小型的廣告公司做牛做馬，</p>
                    <p>過著日復一日的社畜生活。某個星期一早晨，</p>
                    <p>她的兩個同事驚恐地告訴她：「我們這一週『重複』過著同樣的生活！」</p>
                    <p>不知為什麼，全體職員被困在辦公室過著永無止盡的「職場輪迴」，</p>
                    <p>為了打破時間迴圈，他們必須使出渾身解數讓關鍵人物部長意識到這個事實。</p>
                    <p>地獄般的一週卻又笑料百出，這不就是你我的打工日常嗎？本片對職場及打工人生的真實刻畫，</p>
                    <p>各種熟悉又似曾相識的橋段讓人心有戚戚焉。</p>
                </>
            ),
            director: "竹林亮",
            actors: "圓井灣 、 槙田雄司",
            type: "劇情",
            time: "1時23分",
            src: "https://www.youtube.com/embed/PAALl5PeVYk?si=3lcsSgkw0uhvXYUU"
        },
        '03': {
            img: '/topgun_vertical.jpg',
            level: "保護級",
            movieChiName: "捍衛戰士：獨行俠",
            movieEngName: "Top Gun: Maverick",
            date: "2022/12/07",
            info: (
                <>
                    <p>故事敘述服役超過30年，身為海軍頂尖飛行員的「獨行俠」彼得米契爾上校 (湯姆克魯斯 飾)</p>
                    <p>仍舊堅守他的崗位，以試飛員的身份不斷突破飛行極限，</p>
                    <p>也放棄任何足以終止飛行生涯的晉升。</p>
                    <p>他在訓練一組 TOP GUN 菁英小組去執行一個前所未聞的特殊任務時，</p>
                    <p>遇見了已故搭檔「呆頭鵝」尼克布雷德蕭中尉的兒子-「公雞」布雷德利布雷德蕭中尉 (麥爾斯泰勒 飾)。</p>
                    <p>在面對不確定的未來和來自過去夢靨的影響下，「獨行俠」在這個要求飛行員奉獻出最終代價的行動裡，</p>
                    <p>被迫面對自己最深層的心魔。</p>
                </>
            ),
            director: "喬瑟夫柯辛斯基",
            actors: "湯姆克魯斯、喬漢姆、珍妮佛康納莉、方基墨、麥爾斯泰勒、艾德哈里斯、格蘭鮑威爾",
            type: "動作、劇情",
            time: "2時10分",
            src: "https://www.youtube.com/embed/IbsLhjGg6mg?si=_glxs85TU86c_2xU"
        }
    }

    const [selectedMovieId, setSelectedMovieId] = useState('01');

    const screeningVersions = {
        '01': {
            versions: ['2D', '3D', 'IMAX'],
            theaters: {
              '2D': ['影城1', '影城2', '影城3'],
              '3D': ['影城4', '影城5'],
              'IMAX': ['影城6', '影城7', '影城8'],
            },
        },
          '02': {
            versions: ['普通版', '豪華版'],
            theaters: {
              '普通版': ['影城9', '影城10'],
              '豪華版': ['影城11', '影城12', '影城13'],
            },
        },
          '03': {
            versions: ['普通版', 'IMAX'],
            theaters: {
              '普通版': ['影城14', '影城15'],
              'IMAX': ['影城16', '影城17'],
            },
        },
    };

    const handleChange = (event) => {
        const newMovieId = event.target.value;
        setSelectedMovieId(newMovieId);
    };

    const [selectedMovieDetails, setSelectedMovieDetails] = useState(movieDetails['01']);
    
    useEffect(() => {
        // 在 useEffect 中使用回呼函數確保在 movieDetails 更新後執行
        setSelectedMovieDetails(movieDetails[selectedMovieId]);

        // debug
        if (!selectedMovieDetails) {
            console.error(`No details found for movieId: ${selectedMovieId}`);
        }
    }, [selectedMovieId]);

    const [selectedVersion, setSelectedVersion] = useState(null);

    const handleVersionClick = (event, version) => {
        event.preventDefault();
        setSelectedVersion(version);
    };

    const [search, setSearch] = useState('');
    const cookies=new Cookies();
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className='selectMovie'>
                {/* 未: 如果在前一頁是點"蒼鷺與少年"，它就selected */}
                <select value={selectedMovieId} onChange={handleChange}>
                    <option value="01">蒼鷺與少年</option>
                    <option value="02">明天星期一</option>
                    <option value="03">捍衛戰士：獨行俠</option>
                </select>
            </div>

            <section className="movieInfo">

                <div className="poster">
                    <img src={process.env.PUBLIC_URL + selectedMovieDetails.img} alt="" height={500} />
                </div>

                <div className="infoArea">
                    <h1>{selectedMovieDetails.movieChiName}</h1>
                    <h2>{selectedMovieDetails.movieEngName}</h2>
                    <time>上映日期：{selectedMovieDetails.date}</time>

                    <h3>MOVIE INFO</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>導演：</td>
                                <td><p>{selectedMovieDetails.director}</p></td>
                            </tr>
                            <tr>
                                <td>演員：</td>
                                <td><p>{selectedMovieDetails.actors}</p></td>
                            </tr>
                            <tr>
                                <td>類型：</td>
                                <td><p>{selectedMovieDetails.type}</p></td>
                            </tr>
                            <tr>
                                <td>片長：</td>
                                <td><p>{selectedMovieDetails.time}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="versionSelection">
                    <h4>放映版本</h4>
                    <ul className="versionList">
                        {screeningVersions[selectedMovieId].versions.map((version, index) => (
                            <li key={index} className={selectedVersion === version ? 'active' : ''} id="version">
                                {/* a的問題 */}
                                <a onClick={(e) => handleVersionClick(e, version)}>
                                    {version}
                                </a>
                                {selectedVersion === version && (
                                    <ul className="theaterList">
                                        {screeningVersions[selectedMovieId].theaters[version].map((theater, theaterIndex) => (
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
                        src={selectedMovieDetails.src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    >
                    </iframe>
                </div>
                <div className="drama">
                    <h4>劇情簡介</h4>
                    <p>{selectedMovieDetails.info}</p>
                </div>
            </section>
        </>
    );
};

export default MovieDetail;