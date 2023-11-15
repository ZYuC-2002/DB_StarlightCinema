import React, {useState, useEffect} from "react";

export function App() {
    const [movieDetails, setMovieDetails] = useState({
        '01': {
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
    });

    const handleChange = (event) => {
        console.log('hi\n');

        // 獲取<select>標籤中的值
        const movieId = event.target.value;

        // 根據 movieId 從 movieDetails 中取得相應的電影資訊
        const selectedMovieDetails = movieDetails[movieId];

        // 將<select>標籤中的值設定為 `movieDetails` 狀態變數的值
        setMovieDetails(selectedMovieDetails);
    };

    // useEffect(() => {
    //     const movieData = movieDetails;

    //     // 將電影資訊設定為 movieDetails 狀態變數的值
    //     setMovieDetails(movieData);
    // }, [movieDetails]);

    return(
        <>
            <div className='selectMovie'>
                {/* 未: 如果在前一頁是點"蒼鷺與少年"，它就selected */}
                <select value={movieDetails} onChange={handleChange}>
                    <option value='01'>蒼鷺與少年</option>
                    <option value='02'>明天星期一</option>
                    <option value='03'>捍衛戰士：獨行俠</option>
                </select>
            </div>
            <section className="movieInfo">
                <div className="titleArea">
                    <h1>{movieDetails.movieChiName}</h1>
                    <h2>{movieDetails.movieEngName}</h2>
                    <time>上映日期：{movieDetails.date}</time>
                </div>
                <div className="infoArea">
                    <h3>MOVIE INFO</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>導演：</td>
                                <td><p>{movieDetails.director}</p></td>
                            </tr>
                            <tr>
                                <td>演員：</td>
                                <td><p>{movieDetails.actors}</p></td>
                            </tr>
                            <tr>
                                <td>類型：</td>
                                <td><p>{movieDetails.type}</p></td>
                            </tr>
                            <tr>
                                <td>片長：</td>
                                <td><p>{movieDetails.time}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};
