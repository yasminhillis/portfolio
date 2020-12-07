import React from 'react';
import './App.css';

import ProfilePic from './images/yasmin.jpeg'

function App() {
  return (
    <div className='App'>
      <section className='s1'>
        <div className='main-container'>
          <div className='greeting-wrapper'>
            <h1>Hi, I'm Yasmin Hillis</h1>
          </div>
          <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div id='dot-1' className='browser-dot'></div>
              <div id='dot-2' className='browser-dot'></div>
              <div id='dot-3' className='browser-dot'></div>
            </div>
            <ul id="navigation">
              <li><a href="#">Contact</a></li>
            </ul>
            </div>
         
          <div className="left-column">
            <img id="profile-pic" src={ProfilePic}/>
            <h5 style={{textAlign: 'center', lineHeight: 0}}>Personalize Theme</h5>
            <div id="theme-options-wrapper">
              <div id="light-mode" className="theme-dot"></div>
              <div id="blue-mode" className="theme-dot"></div>
              <div id="green-mode" className="theme-dot"></div>
              <div id="purple-mode" className="theme-dot"></div>
           
            </div>
            <p id="settings-note">Theme options will be saved <br />for your next visit</p>
          </div>
          <div className="right-column">
            <div>
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tl" className="corner"></div>
              <h3>What I Do</h3>
                <p> I am a Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        
      </section>

      <section className='s2'>
        <div className='main-container'>ABOUT</div>
      </section>

      <section className='s1'>
        <div className='main-container'>PORTFOLIO</div>
      </section>

      <section className='s2'>
        <div className='main-container'>CONTACT</div>
      </section>
    </div>
  );
}

export default App;