import React from 'react'
import {Link} from 'react-router-dom';

import '../styles/ChatsListItem.scss'

function ChatsListItem(person) {

    const {img, name, text} = person

  return (
    <div className='ChatsListItem'>
        <ul>
        <li>
            <Link to = '/chatting'>
                <span className="chats_img empty"><img src={img}/></span>
                <span className="chats_cont">
                    <span className="chats_name">{name}</span>
                    <span className="chats_latest">{text}</span>
                </span>
                <span className="chats_time">
                    <span>15</span>:<span>33</span>
                </span>
            </Link>
        </li>
        </ul>
    </div>
  )
}

export default ChatsListItem