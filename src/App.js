import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import ContactForm from './components/Contact';

function App() {
  const [navSelected, setNavSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    { name: 'Portfolio', description: 'Project Portfolio' },
    { name: 'Contact', description: 'Please contact me for any questions.' },
    { name: 'About', description: 'A Little about me' },
    { name: 'Resume', description: 'Download my resume to know more about me!' }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  function categorySelected(name) {
        
    switch (name) {
       case "Contact":
           console.log(`${name} clicked`);
         return <ContactForm></ContactForm>;
       default:
         return;
     }
};
  return (
    <div className="App">
      <header >
        <h1 id="header-logo">RF</h1>
      </header>
      <main className="main">
        <Nav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}></Nav>
        <Home></Home>
        {categorySelected(currentCategory.name)}
      </main>
      <footer>
        <h2>Get your website built!</h2>
      <div id="social-media">
        <a href="https://github.com/rosefrancis-tech" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/francis-tech/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div>
        © 2021 Rose Francis. All rights reserved.
      </div>
      </footer>
    </div>
  );
}

export default App;
