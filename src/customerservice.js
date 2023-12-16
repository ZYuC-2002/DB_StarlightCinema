import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./customerserviceCSS.css";
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";

export const CustomerService = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate('/');
    };

    const cinemas = ['cinema1', 'cinema2', 'cinema3'];

    const [search, setSearch] = useState('');

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <form className="customerOpinion" onSubmit={handleSubmit}>
                <div className="name">
                    <div className="nameLabel">姓名:</div>
                    <input type="text"/>
                </div>
                
                <div className="selectSex">
                    <div className="sexLabel">性別:</div>
                    <input type="radio" name="sex" value="male"/>男
                    <input type="radio" name="sex" value="female"/>女
                </div>

                <div className="inputPhone">
                    <div className="phoneLabel">連絡電話:</div>
                    <input type="tel"/>
                </div>

                <div className="inputEmail">
                    <div className="emailLabel">Email:</div>
                    <input type="email"/>
                </div>
                
                <div className="cinema">
                    <div className="cinemaLabel">建議之影城:</div>
                    <select className="selectCinema">
                    {cinemas.map((cinema, index) => (
                        <option key={index} value={cinema}>
                            {cinema}
                        </option>
                    ))}
                    </select>
                </div>

                <div className="opinion">
                    <div className="opinionLabel">建議內容:</div>
                    <input type="text"/>
                </div>

                <button type="submit">送出您的意見</button>
            </form>
        </>
    );
};

export default CustomerService;