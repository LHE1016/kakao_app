import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Tab.scss'
import {FaUser, FaComment, FaSearch, FaEllipsisH} from 'react-icons/fa'

function Tab() {
  
  return (
    <div className='tab'>
      <div className='tab_list'>
        <div className='tab_friends'>
          <Link to='/'>
          <div className="icon"><FaUser /></div>
          <div className="text">Friends</div>
          </Link>
        </div>
        <div className='tab_chats'>
          <Link to='/chats'>
          <div className="icon"><FaComment /></div>
          <div className="text">Chats</div>
          </Link>
        </div>
        <div className='tab_find'>
          <Link to='/find'>
          <div className="icon"><FaSearch /></div>
          <div className="text">Find</div>
          </Link>
        </div>
        <div className='tab_more'>
          <Link to='/more'>
          <div className="icon"><FaEllipsisH /></div>
          <div className="text">More</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Tab