import React from 'react'
import {FaPlane, FaWifi, FaMoon, FaBluetooth, FaBatteryFull, FaCog} from 'react-icons/fa'
import '../styles/Header.scss';
import {Link} from 'react-router-dom';

function Header({heading, spanItem, leftItem, rightItem, rightItem2, className}) {

  return (
    <div className='header'>
      <div className="header_status">
        <div className="left_item">
            <FaPlane />
            <FaWifi />
        </div>
        <div className="center_item">
            <span>15</span>:<span>35</span>
        </div>
        <div className="right_item">
            <FaMoon />
            <FaBluetooth />            
            <span><span>100</span>%</span>
            <FaBatteryFull />
        </div>
      </div>
      <div className="header_title">
        <div className="h1"><h1>{heading} <span>{spanItem}</span></h1></div>
        <div className="left_item">
          <Link to=''>{leftItem}</Link>
        </div>
        <div className="right_item">
          <Link to=''>
            <span>{rightItem}</span>
            <span className='second'>{rightItem2}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header