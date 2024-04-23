import React from 'react';
import './App.css';
import logo from './image/logoimg.webp';

function ContactUs() {
    return (
        <section className='contact-section'>
            <div className='section'>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1> GET IN TOUCH WITH US</h1>
                <h2> We are ready to lead you into the future of technology</h2>
                <br/>
                <br/>
                <div className='ways'>
                    <div className='way'> 
                        <p className='title'>Phone Number</p>
                        <span> &#9742;</span>
                        <p>(646) 508-5286</p>
                    </div>
                    <div className='way'> 
                        <p className='title'>Location</p>
                        <span> &#9873; </span>
                        <p> Fairfax, VA </p>
                        <p> 22030 </p>
                    </div>
                    <div className='way'> 
                        <p className='title'>Email</p>
                        <span> &#9993;</span>
                        <p> contact.info@ailabs.com</p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <br/>
            </div>
        </section>
    )
}
export default ContactUs;