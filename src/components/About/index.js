import React from 'react';
import photo from '../assets/photo.jpg'


function About() {
    return (
        <section className="about-page container">
            <div class="row justify-content-around">
                <div class="col-12 col-sm-12 col-md-3">
                    <h2>
                        About Me
                    </h2>
                </div>    
                <div class="col-12 col-sm-12 col-md-3">
                    <img src={photo} alt="photo" id="photo"/>
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                    <p id="bio-summary">
                        Full Stack Web Developer equipped to deliver clean codes in HTML, CSS, JavaScript, Web APIs, jQuery,
                        Bootstrap, MongoDB, Express.js, React, Node.js, SQL with efficient problem solving ability and testified
                        documentation skills.
                    </p>
                    <p id="bio-summary">Proven analytical and communication skills through Business Analysis experience and bringing a keen
                        eye for details, strong ability to implement mock-ups, and understanding of great user experience
                        design. Educated with Master of Business Administration, Bachelor of Engineering and Certificate in Full Stack Web Development.
                    </p>
                </div> 
            </div>
        </section>
    );
}

export default About;