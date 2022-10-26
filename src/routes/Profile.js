import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Profile.scss'

import {FaComment, FaPencilAlt} from 'react-icons/fa'

function Profile() {
  return (
    <div className='profile'>
      <Header />
      <main className='profile_main'>
        <section className="background">
            <h2 className="blind">My profile background image</h2>
        </section>
        <section className="profile">
            <h2 className="blind">My Profile Info</h2>
            <div className="profile_img empty"></div>
            <div className="profile_cont">
                <span className="profile_name">My Name</span>
                <input type="mail" className="profile_email" placeholder="UserID@gmail.com" />
                <ul className="profile_menu">
                <li>
                    <Link to=''>
                      <span className="icon">
                        <FaComment />
                      </span>My Chatroom
                    </Link>
                </li>
                <li>
                    <Link to=''>
                      <span className="icon">
                        <FaPencilAlt />
                      </span>Edit Profile
                    </Link>
                </li>
                </ul>
            </div>
        </section>
      </main>
    </div>
  )
}

export default Profile