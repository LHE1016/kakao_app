import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../styles/FriendsListItem.scss'

function FriendsListItem(person) {

  const {img, message, name} = person;

  

  return (
    <div className='FriendsListItem'>
      <ul className='profile_list'>
      <li> 
          <Link to='/profile'>
            <span className="profile_img empty"><img src={img} /></span>
            <span className="profile_name">{name}</span>
            <span className="profile_messages">{message}</span>
          </Link>
      </li>
      </ul> 
    </div>
  )
}

export default FriendsListItem