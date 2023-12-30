import React, {useState, useEffect} from "react";
import "./deleteposter.css";
import Navbaremployee from "./upperlistemployee";
import Cookies from "universal-cookie";

export const DeletePoster = () => {
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    var initPosterList = [
        "https://static-cdn.nextapple.tw/prod/2023-07/779E46A98046CD5BC438093721A21F2A/08c9879a7ed2f67ed5e56fa2681e3384_1280.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRc8OK7LL-Gdb0T7456SBoEWaUI0h_ieUam8YVVb7o3iqhuePFE9mvb4G-OXcdUTdVDtk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcb13J8IfODbm2IeWeXEQizmd5aQVDyFGHXr1Aq1bOkEQg-nbrBI2kLXkdWZzYilomfxw&usqp=CAU"
    ];

    const [posterList, setPosterList] = useState(initPosterList);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageClick = (index) => {
        // 切换图片的选择状态
        const newSelectedImages = [...selectedImages];
        const selectedIndex = newSelectedImages.indexOf(index);
        if (selectedIndex === -1) {
        newSelectedImages.push(index);
        } else {
        newSelectedImages.splice(selectedIndex, 1);
        }
        setSelectedImages(newSelectedImages);
    };

    const handleRemoveSelected = () => {
        // 移除选中的图片
        const newPosterList = posterList.filter((_, index) => !selectedImages.includes(index));
        // 清空选中状态
        setSelectedImages([]);
        // 更新图片列表
        setPosterList(newPosterList);
    };

    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className="deleteposter">
                {posterList.map((poster, index) => (
                    <div key={index} className="poster-container">
                        <input
                            type="checkbox"
                            checked={selectedImages.includes(index)}
                            onChange={() => handleImageClick(index)}
                        />
                        <img className="posters" src={poster} alt={`Poster ${index + 1}`} onClick={() => handleImageClick(index)} />
                    </div>
                ))}
            </div>
            
            <div className="removePosterContainer">
                <button className="removePoster" onClick={handleRemoveSelected}>確認刪除</button>
            </div>
        </>
    );
};
export default DeletePoster;