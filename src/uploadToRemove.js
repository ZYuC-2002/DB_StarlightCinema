import React from 'react';
import { Link } from 'react-router-dom';
import './uploadToRemove.css';
import Navbaremployee from './upperlistemployee';

const UploadToRemove = () => {
  return (
    <>
        <Navbaremployee />
        <div className="centered-container">
        <p>下架成功!<br />欲上架電影<br />請點選下方文字</p>
        <Link to="/">前往上架頁面</Link>
        </div>
    </>


  );
};

export default UploadToRemove;
