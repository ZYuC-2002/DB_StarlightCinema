import React from 'react';
import { Link } from 'react-router-dom';
import './main.css'

const Navbaremployee = ({ setSearch }) => {
  return (
    <div className='list'>
      <Link to={'/Employeemain'}>
        <button className='button-main'>
          <p>員工首頁</p>
        </button>
      </Link>
      <input
        className='input-main'
        placeholder='搜尋電影名稱'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className='button-search'>
        <div className='logo-search' />
      </button>
      <div className='blankpart' />
      <Link to={'/Uploadfirst'}>
        <button className='button-sub'>
          <p>上架電影</p>
        </button>
      </Link>
      <Link to={'/RemoveMovie'}>
        <button className='button-sub'>
          <p>下架電影</p>
        </button>
      </Link>
      <Link to={'/UploadPoster'}>
        <button className='button-sub'>
          <p>上傳海報</p>
        </button>
      </Link>
      <Link to={'/TheaterStatus'}>
        <button className='button-sub'>
          <p>場次銷售狀況</p>
        </button>
      </Link>
      <Link to={'/CustomerService'}>
        <button className='button-sub'>
          <p>客服收信及回信</p>
        </button>
      </Link>
    </div>
  );
};

export default Navbaremployee;
