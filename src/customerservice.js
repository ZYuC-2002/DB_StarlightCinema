import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./customerservice.css";
import './main.css'
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";

export const CustomerService = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate('/');
    };

    const cinemas = ['cinema1', 'cinema2', 'cinema3'];

    const [search, setSearch] = useState('');
    const cookies=new Cookies();
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        setName(cookies.get('name') || '');
        setPhone(cookies.get('tel') || ''); // 這裡可能要加上預設值
        setEmail(cookies.get('email') || '');
    }, [cookies]);

    return(
        <>
            <Navbar setSearch={setSearch}/>
            <div className="blank"/>
            <form className="customerOpinion" onSubmit={handleSubmit}>
                <div className="name">
                    <div className="nameLabel">姓名:</div>
                    <input type="text" value={name} readOnly />
                </div>
                
                <div className="selectSex">
                    <div className="sexLabel">性別:</div>
                    <input type="radio" name="sex" value="male"/>男
                    <input type="radio" name="sex" value="female"/>女
                </div>

                <div className="inputPhone">
                    <div className="phoneLabel">連絡電話:</div>
                    <input type="tel" value={phone} readOnly />
                </div>

                <div className="inputEmail">
                    <div className="emailLabel">Email:</div>
                    <input type="email" value={email} readOnly />
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