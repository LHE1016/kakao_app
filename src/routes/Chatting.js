import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Chatting.scss'

import {FaSmile, FaMicrophone, FaPlus, FaChevronLeft, FaSearch} from 'react-icons/fa'
import { GrMenu } from 'react-icons/gr'


function Chatting() {
  return (
    <div className='chatting'>
      <Header heading={'Friend Name'} leftItem={<FaChevronLeft />} rightItem={<FaSearch />} rightItem2={<GrMenu />}/>
      <main className='chatting_main'>
        <span className="date_info">Monday, October 17, 2022</span>
        <div className="chat_box my">
            <span className="chat">Hello!</span>
            <span className="chat">This is a test message.</span>
            <span className="chat">This is a test message. This is a test message.</span>
            <span className="chat_time"><span>16</span>:<span>33</span></span>
        </div>
        <div className="chat_box other">
            <div className="other_info">
                <Link to=''>
                  <span className="profile_img empty"></span>
                </Link>
                <span className="profile_name">Friend Name</span>
            </div>
            <span className="chat">And this is an answer</span>
            <span className="chat">And this is an answer And this is an answer</span>
            <span className="chat">And this is an answer</span>
            <span className="chat_time"><span>17</span>:<span>33</span></span>
        </div>
      </main>
      <footer className='chatting_footer'>
        <span className="plus_btn">
          <Link to=''>
            <FaPlus />
          </Link>
        </span>
        <form action="/" method="post">
          <fieldset className="text_box">
            <legend className="blind">채팅 입력창</legend>
            <label for="chatting" className="blind"></label>
            <input type="text" id="chatting" className="text_field" />
            <span className="emoticon_btn">
              <Link to=''>
                <FaSmile />
              </Link>
            </span>
            <span className="voice_btn">
              <Link to=''>
                <FaMicrophone />
              </Link>
            </span>
          </fieldset>
        </form>
      </footer>
    </div>
  )
}

export default Chatting