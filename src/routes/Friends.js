import React, {Component, useEffect, useState} from 'react'
import FriendsList from '../components/FriendsList';

import '../styles/Friends.scss'
import {FaSearch, FaCog} from 'react-icons/fa'
import Header from '../components/Header';
import Tab from '../components/Tab';
import FriendsListItem from '../components/FriendsListItem';

function Friends() {

  return (
    <div className='friends'>
      <Header heading={'Friends'} spanItem={'1'} leftItem={'Manage'} rightItem={<FaCog />}/>
      <form className="srch_box">
        <fieldset className="srch_inner">
            <legend className="blind">검색창</legend>
            <FaSearch />
            <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Friends" />
        </fieldset>
      </form>
      <FriendsList />
      <Tab />
    </div>
  )
}

export default Friends