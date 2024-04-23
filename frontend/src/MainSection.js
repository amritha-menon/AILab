import React from 'react';
import './App.css';
import images from './image/i.png';

function MainSection() {
    return(
        <main>
        <section className="hero">
          <div>
            <h1>Welcome to AI Labs</h1>
            <p>Innovating the future of Artificial Intelligence</p>
            <button>Explore Services</button>
          </div>
        </section>
        <section className="features">
          {/* <div> */}
          <div className='img-for'>
            <img src={images} width="350" height="300"/>
          </div>
          <div className='right-side'>
            <div className="feature">
              {/* <img src="/path-to-your-image.jpg" alt="Cutting-Edge Innovation" /> */}
              <h2>Cutting-Edge Innovation</h2>
              <p>Pioneering new AI technologies for tomorrow's challenges.</p>
            </div>
            <div className="feature">
              {/* <img src="/path-to-your-image.jpg" alt="Tailored AI Solutions" /> */}
              <h2>Tailored AI Solutions</h2>
              <p>Customized intelligence to fit your unique business needs.</p>
            </div>
            <div className="feature">
              {/* <img src="/path-to-your-image.jpg" alt="Ethical AI" /> */}
              <h2>Ethical AI</h2>
              <p>Committed to the responsible and transparent development of AI.</p>
            </div>
          </div>
          
          {/* </div> */}
        </section>
      </main>
    )
}
export default MainSection;