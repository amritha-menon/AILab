import React from 'react';
import './App.css';
import logo from './image/logoimg.webp';

function Footer() {
    return (
        <footer>
        <div className='left-side-footer'>
          <div className='ai-img'> 
            <img src={logo} width='30' height='30'/> 
            &nbsp; &nbsp; &nbsp;
            <p>AI Labs</p> 
          </div>
          <br/>
        
          <p>Harnessing artificial intelligence to innovate and inspire.</p>
          <p>Connect with AI Labs.</p>
        </div>
        <div className='right-side-footer'>
          <p> QUICK LINKS</p>
          <ul className='foot-list'>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li></li>
          </ul>

        </div>
      </footer>
    )
}
export default Footer;