import React from 'react';
import './App.css';
// import imagei from './image/i.png';
import logoi from './image/logoimg.webp';
import NavBar from './NavBar';
import MainSection from './MainSection';
import Footer from './Footer';
import ContactUs from './ContactUs';
function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <MainSection></MainSection>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
