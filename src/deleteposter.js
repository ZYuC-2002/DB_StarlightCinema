import React, {useState, useEffect} from "react";
import "./deleteposterCSS.css";
import Navbaremployee from "./upperlistemployee";
import Cookies from "universal-cookie";

export const DeletePoster = () => {
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
        </>
    );
};
export default DeletePoster;