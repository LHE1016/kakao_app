import React from 'react'
import ChatsList from '../components/ChatsList'
import Header from '../components/Header'
import Tab from '../components/Tab'
import {Link} from 'react-router-dom';
import { useState } from 'react'
import {FaComment, FaSearch, FaCog} from 'react-icons/fa'

import '../styles/Chats.scss'


function Chats() {

  return (
    <div className='chats'>
      <Header heading={'Chats'} spanItem={'1'} leftItem={'Edit'} rightItem={''}/>
      <form className="srch_box">
        <fieldset className="srch_inner">
            <legend className="blind">검색창</legend>
            <FaSearch />
            <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Friends" />
        </fieldset>
      </form>
      <ChatsList />
      <div className="chat_fa_btn">
        <Link to="">
          <FaComment />
        </Link>
      </div>
      <Tab />
    </div>
  )
}

export default Chats