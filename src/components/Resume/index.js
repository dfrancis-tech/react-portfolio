import React from 'react';
import resume from '../assets/documents/Resume.pdf'

function Resume() {
    return (
        <section className="resume-page container">
            <h2>Proficiencies</h2>
            <ul id="list-proficiencies">
                <li>HTML5/CSS3 </li>
                <li>JavaScript/jQuery</li>
                <li>Foundation/Bootstrap</li>
                <li>MondoDB/MySQL/SQLite</li>
                <li>Express.js</li>
                <li>React/JSX</li>
                <li>Node.js</li>
                <li>Progressive Web Application</li>
                <li>Responsive Web Design</li>
                <li>Model-View-Controller</li>
                <li>JSON/REST</li>
                <li>OOP/TDD</li>
            </ul>
            <div id="resume">
            <a href={resume} target="_blank" id="resume-link" >Download Resume</a>
            </div>
        </section>
    );
}

export default Resume;