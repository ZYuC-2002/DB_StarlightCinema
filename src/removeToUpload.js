import React from 'react';
import { Link } from 'react-router-dom';
import './removeToUpload.css';
import Navbaremployee from './upperlistemployee';


const CenteredText = () => {
  return (
    <>
        <Navbaremployee />
        <div className='blank'/>
        <div className="centered-container">
        <p>下架成功!<br />欲上架電影<br />請點選下方文字</p>
        <Link to="/Uploadfirst">前往上架頁面</Link>
        </div>
    </>
  );
};

export default CenteredText;
