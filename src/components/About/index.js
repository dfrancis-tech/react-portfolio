import React from 'react';
import photo from '../assets/photo.jpg'


function About() {
    return (
        <section className="about-page container">
            <div className="row justify-content-around">
                <div className="col-12 col-sm-12 col-md-3">
                    <h2>
                        About Me
                    </h2>
                </div>
                <div className="col-12 col-sm-12 col-md-3">
                    <img src={photo} alt="photo" id="photo" />
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <p id="bio-summary">
                        Full Stack Web Developer equipped to deliver clean codes in JavaScript, jQuery, Bootstrap, Node.js, Express.js, React, ORM, PWA, MongoDB, SQL, and NoSQL with efficient problem-solving ability and analytical skills.
                    </p>
                    <p id="bio-summary">
                        Business Analyst with recognised documentation skills in creating and maintaining project artifacts such as Business Requirements Document (BRD), Functional Requirements Specification (FRS), Use Case Specifications and Requirements Traceability Matrix, process flow diagrams, screen mock-ups, prototypes, user-interface (UI) design, work break down structure and user manuals.
                    </p>
                    <p id="bio-summary">
                        Proven presentation and communication skills through and bringing a keen eye for details, strong ability to implement mock-ups, and understanding of great user experience design. Educated with a master's degree in Business Administration, bachelor’s degree in Engineering, Certificate in Fundamentals of Business Analysis and Certificate in Full Stack Web Development.
                    </p>
                    {/* <p id="bio-summary">
                        Full Stack Web Developer equipped to deliver clean codes in HTML, CSS, JavaScript, Web APIs, jQuery,
                        Bootstrap, MongoDB, Express.js, React, Node.js, SQL with efficient problem solving ability and testified
                        documentation skills.
                    </p>
                    <p id="bio-summary">Proven analytical and communication skills through Business Analysis experience and bringing a keen
                        eye for details, strong ability to implement mock-ups, and understanding of great user experience
                        design. Educated with Master of Business Administration, Bachelor of Engineering and Certificate in Full Stack Web Development.
                    </p> */}
                </div>
            </div>
        </section>
    );
}

export default About;