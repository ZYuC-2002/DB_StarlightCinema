import React, {useState, useEffect} from "react";
import "./uploadposter.css";
import Navbaremployee from "./upperlistemployee";
import Cookies from "universal-cookie";

export const UploadPoster = () => {
    const [search, setSearch] = useState('');
    const cookies=new Cookies();
    
    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

    const [image, setImage] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        cookies.set('imageSrc',imageSrc,{path:'/'});
    },[imageSrc])
    
    const updateImage = (e) => {
        e.preventDefault();
        setImage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        displayImage();
    };

    const displayImage = async () => {
        try {
          // 使用fetch獲取img data
          const response = await fetch(image);

          if (!response.ok) {
            throw new Error('無法獲取圖片');
          }
    
          // 獲取img data的blob
          const blob = await response.blob();
          // 創建臨時URL
          const url = URL.createObjectURL(blob);
    
          // 設img URL
          setImageSrc(url);
        } catch (err) {
          // error
          console.error(err);
          setImageSrc('');
        }
    };
    
    return(
        <>
            <Navbaremployee setSearch={setSearch}/>
            <div className="blank"/>
            <form className="inputImgURL" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <div className="title">宣傳海報上傳</div>
                    <input
                        className="imgURL"
                        id="image"
                        type="text"
                        value={image}
                        onChange={updateImage}
                    />
                </div>
                <button type="submit">上傳</button>
            </form>

            {imageSrc && (
                <div className="previewImg">
                    <img src={imageSrc} alt="input_image" />
                </div>
            )}
        </>
    );
};
export default UploadPoster;