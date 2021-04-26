import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {

  const [categories] = useState([
    { name: 'Rose'},
    { name: 'About', description: 'Project Portfolio' },
    { name: 'Portfolio', description: 'Please contact me for any questions.' },
    { name: 'Resume', description: 'A Little about me' },
    { name: 'Contact', description: 'Download my resume to know more about me!' }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function categorySelected(name) {
    switch (name) {
       case "Rose":
         return <Home/>;
       case "Portfolio":
         return <Portfolio/>;
       case "Contact":
         return <ContactForm></ContactForm>;
       case "About":
         return <About/>;
       case "Resume":
         return <Resume/>;
       default:
         return;
     }
  };

  return (
    <div className="App">
      
      <header>
        <Nav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}></Nav>
      </header>

      <main className="main">
        {categorySelected(currentCategory.name)}
      </main>
      
      <footer>
        <h2>Get your website built!</h2>
        <div id="social-media">
          <h4>Visit me here</h4>
          <a href="https://github.com/rosefrancis-tech" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/francis-tech/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://stackoverflow.com/users/story/14481269" target="_blank">
            <i className="fab fa-stack-overflow"></i>
          </a>
        </div>
        <div>
          © 2021 Rose Francis. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
