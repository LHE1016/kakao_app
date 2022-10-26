import React, {Component, useState} from 'react'
import {Link} from 'react-router-dom';

import Header from '../components/Header'
import Tab from '../components/Tab'
import {FaFacebook, FaMobile, FaQrcode, FaEnvelope} from 'react-icons/fa'
import '../styles/Find.scss'

function Find() {

  return (
    <div className='find'>
      <Header heading={'Find'} leftItem={'Edit'} rightItem={''}/>
      <main>
        <ul className="find_method">
        <li>
          <Link to=''>
            <FaFacebook />Find
          </Link>
        </li>
        <li>
          <Link to=''>
            <FaMobile />QR Code
          </Link>
        </li>
        <li>
          <Link to=''>
            <FaQrcode />Shake
          </Link>
        </li>
        <li>
          <Link to=''>
            <FaEnvelope />Invite via SNS
          </Link>
        </li>
        </ul>
        <section className="recommend_section">
            <header>
                <h2>Recommended Freinds</h2>
            </header>
            <ul>
            <li>You Have no recommended friends</li>
            </ul>
        </section>
      </main>
      <Tab />
    </div>
  )
}

export default Find