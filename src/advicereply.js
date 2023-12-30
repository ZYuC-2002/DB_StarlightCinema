import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./advicereply.css";
import Navbaremployee from "./upperlistemployee";
import Cookies from "universal-cookie";

export const AdviceReply = () => {
    var cinemaList = ['台北信義威秀影城', '台北京站威秀影城', '板橋大遠百威秀影城'];
    var emailtitle = ['建議1', '建議2', '建議3'];
    var date = ['2021/10/01', '2021/10/02', '2021/10/03'];

    // 上一頁
    const goBack = () => {
        window.history.go(-1);
    };

    const [search, setSearch] = useState('');
    const cookies=new Cookies();
    
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className="emailtitle">顧客反映信箱</div>
            <table className="emailtable">
                {/* tr -> row */}
                <tr className="infohead">
                    {/* th -> column(head) */}
                    <th>影城分店</th>
                    <th>信件標題</th>
                    <th>日期</th>
                </tr>
                {cinemaList.map((cinema, index) => (
                    <tr>
                        {/* td -> column */}
                        <td className="infocolumn" key={index}>{cinema}</td>
                        <Link to={'/Advicedetail'} key={index}>{emailtitle[index]}</Link>
                        <td key={index}>{date[index]}</td>
                    </tr>
                ))}
            </table>
            <div className="temp temp2">
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" class="btn btn-outline-primary" onClick={goBack}>上一頁</button>
                    <button type="button" class="btn btn-outline-primary">下一頁</button>
                </div>
            </div>
        </>
    );
};
export default AdviceReply;