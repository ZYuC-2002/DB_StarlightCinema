import React, {useState, useEffect} from "react";
import "./advicedetail.css";
import Navbaremployee from "./upperlistemployee";
import Cookies from "universal-cookie";

export const AdviceDetail = () => {
    const [search, setSearch] = useState('');
    const cookies=new Cookies();
    
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className="advicedetail">
                <div className="customerinfo">
                    <h3 className="title">顧客資訊</h3>
                    <div className="name">
                        <div className="label">姓名</div>
                        <div className="input">嘿嘿嘿</div>
                    </div>
                    <div className="sex">
                        <div className="label">性別</div>
                        <div className="input">嘿嘿嘿</div>
                    </div>
                    <div className="phone">
                        <div className="label">連絡電話</div>
                        <div className="input">嘿嘿嘿</div>
                    </div>
                    <div className="email">
                        <div className="label">E-mail</div>
                        <div className="input">嘿嘿嘿</div>
                    </div>
                    <div className="cinema">
                        <div className="label">影城分店</div>
                        <div className="input">嘿嘿嘿</div>
                    </div>
                </div>
                <div className="advicecontent">
                    <h3 className="title">建議內容</h3>
                    <div className="content">以下省略</div>
                </div>
                <form className="advicereply">
                    <h3 className="title">信件回覆</h3>
                    <input type="text" className="reply" />
                    <button type="submit">回覆</button>
                </form>
            </div>
        </>
    );
};
export default AdviceDetail;