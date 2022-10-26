import React, { useState } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Friends from './routes/Friends';
import Chats from  './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Profile from './routes/Profile';
import Chatting from  './routes/Chatting';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Friends />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/chatting' element={<Chatting />} />
          <Route path='/find' element={<Find />} />
          <Route path='/more' element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
