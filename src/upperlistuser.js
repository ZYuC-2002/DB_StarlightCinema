import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearch }) => {
  return (
    <div className='list'>
      <Link to={'/'}>
        <button className='button-main'>
          <p>星光電影院</p>
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
      <Link to={'/'}>
        <button className='button-sub'>
          <p>電影簡介</p>
        </button>
      </Link>
      <Link to={'/'}>
        <button className='button-sub'>
          <p>客服頁面</p>
        </button>
      </Link>
      <Link to={'/'}>
        <button className='button-sub'>
          <p>購物車</p>
        </button>
      </Link>
      <Link to={'/Login'}>
        <button className='button-sub'>
          <p>會員專區</p>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;