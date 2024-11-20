import React from 'react';
import searchIcon from './img/search.png';
import './Search.css';

export default function Search({ onSearchChange }) {
  return (
    <div className="search">
      <img src={searchIcon} alt="Search Icon" style={{ height: '30px', width: '30px' }} />
      <input type="search" onChange={onSearchChange} placeholder="Search" />
    </div>
  );
}
