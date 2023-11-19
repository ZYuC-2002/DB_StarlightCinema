import React, {useState, useEffect} from "react";
import "./movieinfoCSS.css";

const MovieInfo = () => {
    var movieDetails = {
        '01': {
            img: '/kimitachiwadouikiruka_vertical.jpg',
            level: "普遍級",
            movieChiName: "蒼鷺與少年",
            movieEngName: "The Boy and the Heron",
            date: "2023/10/06",
            // eslint-disable-next-line no-multi-str
            info: "★動畫大師宮崎駿睽違10年全新力作！\n\
            ★破天荒「零宣傳」策略轟動全球，橫掃日本票房80億！\n\
            ★上映首四日票房打破《神隱少女》紀錄，累積超過400萬觀影人次！\n\n\
            動畫大師宮﨑駿繼《風起》後，睽違10年再次製作動畫長片。\n\n\
            -甲上",
            director: "宮﨑駿",
            actors: "-",
            type: "劇情",
            time: "2時4分"
        },
        '02': {
            img: '/scale_vertical.jpg',
            level: "普遍級",
            movieChiName: "明天星期一",
            movieEngName: "Mondays: See You This Week!",
            date: "2023/10/20",
            // eslint-disable-next-line no-multi-str
            info: "吉川和他的同事們在一家小型的廣告公司做牛做馬，\
            過著日復一日的社畜生活。某個星期一早晨，\
            她的兩個同事驚恐地告訴她：「我們這一週『重複』過著同樣的生活！」\
            不知為什麼，全體職員被困在辦公室過著永無止盡的「職場輪迴」，\
            為了打破時間迴圈，他們必須使出渾身解數讓關鍵人物部長意識到這個事實。\
            地獄般的一週卻又笑料百出，這不就是你我的打工日常嗎？本片對職場及打工人生的真實刻畫，\
            各種熟悉又似曾相識的橋段讓人心有戚戚焉。",
            director: "竹林亮",
            actors: "圓井灣 、 槙田雄司",
            type: "劇情",
            time: "1時23分"
        },
        '03': {
            img: '/topgun_vertical.jpg',
            level: "保護級",
            movieChiName: "捍衛戰士：獨行俠",
            movieEngName: "Top Gun: Maverick",
            date: "2022/12/07",
            // eslint-disable-next-line no-multi-str
            info: "故事敘述服役超過30年，身為海軍頂尖飛行員的「獨行俠」彼得米契爾上校 (湯姆克魯斯 飾) \
            仍舊堅守他的崗位，以試飛員的身份不斷突破飛行極限，\
            也放棄任何足以終止飛行生涯的晉升。\
            他在訓練一組 TOP GUN 菁英小組去執行一個前所未聞的特殊任務時，\
            遇見了已故搭檔「呆頭鵝」尼克布雷德蕭中尉的兒子-「公雞」布雷德利布雷德蕭中尉 (麥爾斯泰勒 飾) 。\
            在面對不確定的未來和來自過去夢靨的影響下，「獨行俠」在這個要求飛行員奉獻出最終代價的行動裡，\
            被迫面對自己最深層的心魔。",
            director: "喬瑟夫柯辛斯基",
            actors: "湯姆克魯斯、喬漢姆、珍妮佛康納莉、方基墨、麥爾斯泰勒、艾德哈里斯、格蘭鮑威爾",
            type: "動作、劇情",
            time: "2時10分"
        }
    }

    const [selectedMovieId, setSelectedMovieId] = useState('01');

    /* 未解決區(init)start */
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

    const initialVersion = screeningVersions[selectedMovieId].versions[0];
    const [selectedScreeningVersion, setSelectedScreeningVersion] = useState(screeningVersions[selectedMovieId].versions[0]);
    const [hoveredVersion, setHoveredVersion] = useState(screeningVersions[selectedMovieId].versions[0]);
    // const [hoveredVersion, setHoveredVersion] = useState(null);

    /* 未解決區(init)end */

    const handleChange = (event) => {
        const newMovieId = event.target.value;
        setSelectedMovieId(newMovieId);
        setSelectedScreeningVersion(screeningVersions[newMovieId][0]);  // 預設選擇每部電影的第一個放映版本
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

    /* 未解決區start */
    const [activeVersion, setActiveVersion] = useState(screeningVersions[selectedMovieId][0]);

    const handleVersionHover = (version) => {
        console.log('handleVersionHover')
        setActiveVersion(version);
        setHoveredVersion(version);
    };
    /* 未解決區end */

    return(
        <>
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
                
                {/* 懸停才顯示theater */}
                <div className="versionSelection">
                    <h4>放映版本</h4>    
                    <ul
                        className="versionList"
                        onMouseEnter={() => handleVersionHover(activeVersion)}
                    >
                        {screeningVersions[selectedMovieId].versions.map((version, index) => (
                            <li key={index} className={activeVersion === version ? 'active' : ''}>
                                <a href="#" onMouseEnter={() => handleVersionHover(version)}>
                                    {version}
                                </a>
                                {hoveredVersion === version && (
                                    <ul className="theaterList">
                                        {screeningVersions[selectedMovieId].theaters[version].map((theater, theaterIndex) => (
                                            <li key={theaterIndex}><a href="#">{theater}</a></li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

            </section>
        </>
    );
};

export default MovieInfo;