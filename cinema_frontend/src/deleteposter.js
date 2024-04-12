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
        "/topgun.jpg",
        "/kimitachiwadouikiruka.jpg",
        "/scale.jpg"
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