import React from 'react';
import logo from '../assets/logo2.gif';
import photo from '../assets/photo.jpg'

function Home() {
    return (
        <section className="home-page">
            <img src={logo} alt="logo" id="logo-image"/>
        </section>
        
    );
}

export default Home;