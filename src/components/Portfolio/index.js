import React from 'react';


function Portfolio() {
    const projects = [
        {
            name: 'EZ Budget',
            alt: 'animation of ezbudget',
            url: "https://ez-budget10.herokuapp.com/",
            github: 'https://github.com/ez-budget/e-z-budget'
        },
        {
            name: 'Taskinator',
            alt: 'animation of taskinator',
            url: "https://rosefrancis-tech.github.io/taskinator/",
            github: 'https://github.com/rosefrancis-tech/taskinator'
        },
        {
          name: 'Pizza Hunt',
          alt: 'animation of pizza hunt',
          url: "https://mighty-anchorage-10696.herokuapp.com/",
          github: 'https://github.com/rosefrancis-tech/pizza-hunt'
        },
        {
          name: 'Save TV',
          alt: 'animation of save tv',
          url: "https://utbootcampgroup2.github.io/SaveTV/",
          github: 'https://github.com/UTBootCampGroup2/SaveTV'
        },
        {
          name: 'Scheduler',
          alt: 'animation of pizza hunt',
          url: "https://rosefrancis-tech.github.io/work-day-scheduler/",
          github: 'https://github.com/rosefrancis-tech/work-day-scheduler'
        },
        
        {
          name: 'Git it Done',
          alt: 'animation of git it done',
          url: "https://utbootcampgroup2.github.io/git-it-done/",
          github: 'https://github.com/rosefrancis-tech/git-it-done'
        }
    ]
    return (
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
              </div>
              ))}
            </div>
        </section>
    );
}

export default Portfolio;