import React from 'react';
import './App.css';
import logo from './image/logoimg.webp';

function NavBar() {
    return (
        <nav>
          <div className='ai-imgs'> 
            <img src={logo} width='30' height='30'/> 
            &nbsp; &nbsp; &nbsp;
            <p>AI Labs</p> 
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li></li>
          </ul>
        </nav>
    )
}
export default NavBar;