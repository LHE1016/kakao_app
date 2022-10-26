import React, {Component, useState} from 'react'
import {Link} from 'react-router-dom';
import '../styles/More.scss'

import Header from '../components/Header'
import Tab from '../components/Tab'
import {FaCog, FaComment, FaSmile, FaPaintBrush, FaHandPeace, FaUser, FaInfoCircle, FaUtensils, FaStore, FaTv, FaPencilAlt, FaGraduationCap, FaUniversity, FaWonSign, FaVideo} from 'react-icons/fa'


function More() {

  return (
    <div className='more'>
      <Header  heading={'More'} leftItem={''} rightItem={<FaCog />}/>
      <main>
        <section className="user_info">
            <h2 className="blind">사용자 정보</h2>
            <span className="profile_img empty"></span>
            <span className="profile_info">
                <span className="profile_name">My Name</span>
                <span className="profile_email">Userid@gmail.com</span>
            </span>
            <span className="chat_img">
              <Link to=''>
                <FaComment />
              </Link>
            </span>
        </section>
        <section className="user_menu">
            <h2 className="blind">사용자 메뉴</h2>
            <ul>
            <li>
              <Link to=''>
                <FaSmile />Emoticons
              </Link>
            </li>
            <li>
              <Link to=''>
                <FaPaintBrush />Themes
              </Link>
            </li>
            <li>
              <Link to=''>
                <FaHandPeace />Plus Friends
              </Link>
            </li>
            <li>
              <Link to=''>
                <FaUser />Account
              </Link>
            </li>
            </ul>
        </section>
        <section className="plus_friends">
          <header>
              <h2>Plus Friends</h2>
              <span>
                <FaInfoCircle /> Learn More
              </span>
          </header>
          <ul className="plus_list">
          <li>
            <Link to=''>
              <FaUtensils />Order
            </Link>
          </li>
          <li>
            <Link to=''>
              <FaStore />Store
            </Link>
          </li>
          <li>
            <Link to=''>
              <FaTv />TV Channel/Radio
            </Link>
          </li>
          <li>
            <Link to=''>
              <FaPencilAlt />Creation
            </Link>
          </li>
          <li>
            <Link to=''>
              <FaGraduationCap />Education
            </Link>
          </li>
          <li>
            <Link to=''>
              <FaUniversity />Politics/Society
            </Link>
          </li>
          <li>
            <Link to=''>
              <FaWonSign />Finance
            </Link>
          </li>
          <li>
            <Link to=''>
              <FaVideo />Movies/Music
            </Link>
          </li>
          </ul>
        </section>
        <section className="more_app">
          <h2 className="blind">앱 더보기</h2>
          <ul>
          <li>
            <Link to=''>
              <span className="app_icon"></span>Kakao Story
            </Link>
          </li>
          <li>
            <Link to=''>
              <span className="app_icon"></span>Path
            </Link>
          </li>
          <li>
            <Link to=''>
              <span className="app_icon"></span>Kakao friends
            </Link>
          </li>
          </ul>
        </section>
      </main>
      <Tab />
    </div>
  )
}

export default More