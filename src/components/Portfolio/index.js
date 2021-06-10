import React from 'react';

function Portfolio() {
    const projects = [
      {
        name: 'Woof',
        alt: 'animation of woof',
        url: "https://woof-2021.herokuapp.com/",
        github: 'https://github.com/woof-board/woof',
        description: 'Dog walking services app with scheduler, card payment, location tracking, review and rate the dog walker',
        technology: 'MERN | GraphQL | Mapbox | JWT | Stripe | Concurrently'
      },
      {
        name: 'Shop Shop',
        alt: 'animation of shop shop',
        url: "https://aqueous-eyrie-25049.herokuapp.com/",
        github: 'https://github.com/rosefrancis-tech/shop-shop',
        description: 'E-commerce website ',
        technology: 'MERN | GraphQL | JWT | Stripe | Redux | IndexedDB'
      },
      {
        name: 'EZ Budget',
        alt: 'animation of ezbudget',
        url: "https://ez-budget10.herokuapp.com/",
        github: 'https://github.com/ez-budget/e-z-budget',
        description: 'Budgeting app with visual representaion of income and expense and post your financial thoughts and experiences ',
        technology: 'Node | Express | MySQL | Handlebars | MVC | Bcrypt | Google charts'
      },
      {
        name: 'Google Book Search',
        alt: 'animation of google book search',
        url: "https://intense-shore-78978.herokuapp.com/",
        github: 'https://github.com/rosefrancis-tech/book-search-MERN-GraphQL',
        description: 'A web application where users can search for books, create an account, save their favourite books and delete saved books',
        technology: 'MERN | GraphQL | JWT | Appolo Server | bcrypt'
      },
      {
        name: 'Pizza Hunt',
        alt: 'animation of pizza hunt',
        url: "https://mighty-anchorage-10696.herokuapp.com/",
        github: 'https://github.com/rosefrancis-tech/pizza-hunt',
        description: 'Connect with pizza lovers and share your favourite recipes',
        technology: 'Node | Express | MongoDB | IndexedDB | PWA | REST'
      },
      {
        name: 'Photo Port',
        alt: 'animation of photo port',
        url: "https://rosefrancis-tech.github.io/photo-port/",
        github: 'https://github.com/rosefrancis-tech/photo-port',
        description: 'Photo port is a portfolio site for a photographer for local businesses',
        technology: 'React | Node | Bootstrap | React Testing Library | JSX'
      },
      {
        name: 'Save TV',
        alt: 'animation of save tv',
        url: "https://utbootcampgroup2.github.io/SaveTV/",
        github: 'https://github.com/UTBootCampGroup2/SaveTV',
        description: 'SaveTV provides a quick and easy way to search up your favorite shows, what time they are scheduled to play, find out other highly rated and related shows, and a one-click composed reminder schedule for upcoming show time',
        technology: 'JavaScript | jQuery | moment.js | MotionUI | Fontawesome | Server-side API'
      },
      {
        name: 'Scheduler',
        alt: 'animation of scheduler app',
        url: "https://rosefrancis-tech.github.io/work-day-scheduler/",
        github: 'https://github.com/rosefrancis-tech/work-day-scheduler',
        description: 'A simple calendar application that allows a user to save events for each hour of a work day',
        technology: 'jQuery | JavaScript | moment.js | HTML | CSS | iconic | fontawesome'
      },
      {
        name: 'Git it Done',
        alt: 'animation of git it done',
        url: "https://rosefrancis-tech.github.io/git-it-done/",
        github: 'https://github.com/rosefrancis-tech/git-it-done',
        description: 'A web app that will search GitHub for open source projects with open issues and pull requests',
        technology: 'HTML | JavaScript | Server side API | CSS'
      },
      {
        name: 'Taskinator',
        alt: 'animation of taskinator',
        url: "https://rosefrancis-tech.github.io/taskinator/",
        github: 'https://github.com/rosefrancis-tech/taskinator',
        description: 'Taskinator is a task tracker app that allows to organize your to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed',
        technology: 'HTML | JavaScript | Web API | CSS | Local Storage'
      },
      {
        name: 'Password Generator',
        alt: 'animation of password generator',
        url: "https://rosefrancis-tech.github.io/password-generator/",
        github: 'https://github.com/rosefrancis-tech/password-generator',
        description: 'Generate a random password with options to include lowercase, uppercase, numeric and special characters',
        technology: 'HTML | JavaScript | CSS'
      }
    ]
    return (
      <div> 
        <h1 className="transparent">Project Portfolio</h1>
        <div>Below you'll find a selection of some of my projects.</div>
        <section className="portfolio-page container">
            <div className="row justify-content-around align-items-center">
              {projects.map((project, i) => (
              <div className="card" key={project.name}>
                <img src={process.env.PUBLIC_URL + `/assets/images/${i}.gif`} className="card-img" alt={project.alt}/>
                  <div className="card-img-overlay row align-items-center justify-content-center">
                    <a className="card-title" href={project.url} target="_blank">
                      <i class="fas fa-link">{project.name}</i>
                    </a>
                    <a className="card-text" href={project.github} target="_blank">
                      <i className="fab fa-github " id="github-portfolio"></i>
                    </a>
                  </div>
                  <div id="project-technology">
                    {project.technology}
                  </div>
                  <div id="project-description">  
                    {project.description}
                  </div>
              </div>
              ))}
            </div>
        </section>
      </div>
    );
}

export default Portfolio;