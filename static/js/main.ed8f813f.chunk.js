(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var i=a(1),o=a.n(i),s=a(6),r=a.n(s),c=(a(11),a(2)),n=(a(12),a.p+"static/media/logo2.78ca3713.gif"),l=a.p+"static/media/photo.fb312dbe.jpg",h=a(0);var d=function(){return Object(h.jsx)("section",{className:"home-page",children:Object(h.jsx)("img",{src:n,alt:"logo",id:"logo-image"})})};var u=function(e){var t=e.categories,a=void 0===t?[]:t,i=e.setCurrentCategory,o=e.currentCategory;return Object(h.jsx)("nav",{className:"header nav-bar",children:Object(h.jsx)("ul",{className:"header-ul navbar-nav",children:a.map((function(e){return Object(h.jsx)("li",{className:"nav nav-item ".concat(o.name===e.name&&"navActive"),children:Object(h.jsx)("span",{onClick:function(){i(e)},children:(t=e.name,t.charAt(0).toUpperCase()+t.slice(1))})},e.name);var t}))})})},m=a(3),p=a(4);var j=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(c.a)(e,2),a=t[0],o=t[1],s=a.name,r=a.email,n=a.message,l=Object(i.useState)(""),d=Object(c.a)(l,2),u=d[0],j=d[1];function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o(Object(p.a)(Object(p.a)({},a),{},Object(m.a)({},e.target.name,e.target.value))),u||o(Object(p.a)(Object(p.a)({},a),{},Object(m.a)({},e.target.name,e.target.value))),console.log("errorMessage",u)}return Object(h.jsxs)("section",{className:"contact-page container",children:[Object(h.jsx)("h1",{children:"Send your message"}),Object(h.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"name"}),Object(h.jsx)("input",{type:"text",defaultValue:s,onBlur:b,name:"name",placeholder:"Your Name"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"email"}),Object(h.jsx)("input",{type:"email",defaultValue:r,onBlur:b,name:"email",placeholder:"Your Email"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"message"}),Object(h.jsx)("textarea",{name:"message",defaultValue:n,onBlur:b,rows:"5",placeholder:"Your message"})]}),u&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:u})}),Object(h.jsx)("button",{type:"submit",className:"contact-button",children:"Submit"})]}),Object(h.jsx)("p",{children:"Emails to rosefrancistoronto@gmail.com"})]})};var b=function(){return Object(h.jsx)("section",{className:"about-page container",children:Object(h.jsxs)("div",{className:"row justify-content-around",children:[Object(h.jsx)("div",{className:"col-12 col-sm-12 col-md-3",children:Object(h.jsx)("h2",{children:"About Me"})}),Object(h.jsx)("div",{className:"col-12 col-sm-12 col-md-3",children:Object(h.jsx)("img",{src:l,alt:"photo",id:"photo"})}),Object(h.jsxs)("div",{className:"col-12 col-sm-12 col-md-6",children:[Object(h.jsx)("p",{id:"bio-summary",children:"Full Stack Web Developer equipped to deliver clean codes in JavaScript, jQuery, Bootstrap, Node.js, Express.js, React, ORM, PWA, MongoDB, SQL, and NoSQL with efficient problem-solving ability and analytical skills."}),Object(h.jsx)("p",{id:"bio-summary",children:"Business Analyst with recognised documentation skills in creating and maintaining project artifacts such as Business Requirements Document (BRD), Functional Requirements Specification (FRS), Use Case Specifications and Requirements Traceability Matrix, process flow diagrams, screen mock-ups, prototypes, user-interface (UI) design, work break down structure and user manuals."}),Object(h.jsx)("p",{id:"bio-summary",children:"Proven presentation and communication skills through and bringing a keen eye for details, strong ability to implement mock-ups, and understanding of great user experience design. Educated with a master's degree in Business Administration, bachelor\u2019s degree in Engineering, Certificate in Fundamentals of Business Analysis and Certificate in Full Stack Web Development."})]})]})})},g=a.p+"static/media/Resume.4792cf32.pdf";var f=function(){return Object(h.jsxs)("section",{className:"resume-page container",children:[Object(h.jsx)("h2",{children:"Proficiencies"}),Object(h.jsx)("div",{id:"resume",children:Object(h.jsx)("a",{href:g,target:"_blank",id:"resume-link",children:"Download Resume"})}),Object(h.jsxs)("ul",{id:"list-proficiencies",children:[Object(h.jsx)("li",{children:"HTML5/CSS3 "}),Object(h.jsx)("li",{children:"JavaScript/jQuery"}),Object(h.jsx)("li",{children:"Foundation/Bootstrap"}),Object(h.jsx)("li",{children:"MondoDB/MySQL/SQLite"}),Object(h.jsx)("li",{children:"Express.js"}),Object(h.jsx)("li",{children:"React/JSX"}),Object(h.jsx)("li",{children:"Node.js"}),Object(h.jsx)("li",{children:"Progressive Web Application"}),Object(h.jsx)("li",{children:"Responsive Web Design"}),Object(h.jsx)("li",{children:"Model-View-Controller"}),Object(h.jsx)("li",{children:"JSON/REST"}),Object(h.jsx)("li",{children:"OOP/TDD"})]})]})};var O=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"transparent",children:"Project Portfolio"}),Object(h.jsx)("div",{children:"Below you'll find a selection of some of my projects."}),Object(h.jsx)("section",{className:"portfolio-page container",children:Object(h.jsx)("div",{className:"row justify-content-around align-items-center",children:[{name:"Woof",alt:"animation of woof",url:"https://woof-2021.herokuapp.com/",github:"https://github.com/woof-board/woof",description:"Dog walking services app with scheduler, card payment, location tracking, review and rate the dog walker",technology:"MERN | GraphQL | Mapbox | JWT | Stripe | Concurrently"},{name:"Shop Shop",alt:"animation of shop shop",url:"https://aqueous-eyrie-25049.herokuapp.com/",github:"https://github.com/rosefrancis-tech/shop-shop",description:"E-commerce website ",technology:"MERN | GraphQL | JWT | Stripe | Redux | IndexedDB"},{name:"EZ Budget",alt:"animation of ezbudget",url:"https://ez-budget10.herokuapp.com/",github:"https://github.com/ez-budget/e-z-budget",description:"Budgeting app with visual representaion of income and expense and post your financial thoughts and experiences ",technology:"Node | Express | MySQL | Handlebars | MVC | Bcrypt | Google charts"},{name:"Google Book Search",alt:"animation of google book search",url:"https://intense-shore-78978.herokuapp.com/",github:"https://github.com/rosefrancis-tech/book-search-MERN-GraphQL",description:"A web application where users can search for books, create an account, save their favourite books and delete saved books",technology:"MERN | GraphQL | JWT | Appolo Server | bcrypt"},{name:"Pizza Hunt",alt:"animation of pizza hunt",url:"https://mighty-anchorage-10696.herokuapp.com/",github:"https://github.com/rosefrancis-tech/pizza-hunt",description:"Connect with pizza lovers and share your favourite recipes",technology:"Node | Express | MongoDB | IndexedDB | PWA | REST"},{name:"Photo Port",alt:"animation of photo port",url:"https://rosefrancis-tech.github.io/photo-port/",github:"https://github.com/rosefrancis-tech/photo-port",description:"Photo port is a portfolio site for a photographer for local businesses",technology:"React | Node | Bootstrap | React Testing Library | JSX"},{name:"Save TV",alt:"animation of save tv",url:"https://utbootcampgroup2.github.io/SaveTV/",github:"https://github.com/UTBootCampGroup2/SaveTV",description:"SaveTV provides a quick and easy way to search up your favorite shows, what time they are scheduled to play, find out other highly rated and related shows, and a one-click composed reminder schedule for upcoming show time",technology:"JavaScript | jQuery | moment.js | MotionUI | Fontawesome | Server-side API"},{name:"Scheduler",alt:"animation of scheduler app",url:"https://rosefrancis-tech.github.io/work-day-scheduler/",github:"https://github.com/rosefrancis-tech/work-day-scheduler",description:"A simple calendar application that allows a user to save events for each hour of a work day",technology:"jQuery | JavaScript | moment.js | HTML | CSS | iconic | fontawesome"},{name:"Git it Done",alt:"animation of git it done",url:"https://rosefrancis-tech.github.io/git-it-done/",github:"https://github.com/rosefrancis-tech/git-it-done",description:"A web app that will search GitHub for open source projects with open issues and pull requests",technology:"HTML | JavaScript | Server side API | CSS"},{name:"Taskinator",alt:"animation of taskinator",url:"https://rosefrancis-tech.github.io/taskinator/",github:"https://github.com/rosefrancis-tech/taskinator",description:"Taskinator is a task tracker app that allows to organize your to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed",technology:"HTML | JavaScript | Web API | CSS | Local Storage"},{name:"Password Generator",alt:"animation of password generator",url:"https://rosefrancis-tech.github.io/password-generator/",github:"https://github.com/rosefrancis-tech/password-generator",description:"Generate a random password with options to include lowercase, uppercase, numeric and special characters",technology:"HTML | JavaScript | CSS"}].map((function(e,t){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{src:"/react-portfolio"+"/assets/images/".concat(t,".gif"),className:"card-img",alt:e.alt}),Object(h.jsxs)("div",{className:"card-img-overlay row align-items-center justify-content-center",children:[Object(h.jsx)("a",{className:"card-title",href:e.url,target:"_blank",children:Object(h.jsx)("i",{class:"fas fa-link",children:e.name})}),Object(h.jsx)("a",{className:"card-text",href:e.github,target:"_blank",children:Object(h.jsx)("i",{className:"fab fa-github ",id:"github-portfolio"})})]}),Object(h.jsx)("div",{id:"project-technology",children:e.technology}),Object(h.jsx)("div",{id:"project-description",children:e.description})]},e.name)}))})})]})};var x=function(){var e=Object(i.useState)([{name:"Rose"},{name:"About",description:"Project Portfolio"},{name:"Portfolio",description:"Please contact me for any questions."},{name:"Resume",description:"A Little about me"},{name:"Contact",description:"Download my resume to know more about me!"}]),t=Object(c.a)(e,1)[0],a=Object(i.useState)(t[0]),o=Object(c.a)(a,2),s=o[0],r=o[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsx)(u,{categories:t,setCurrentCategory:r,currentCategory:s})}),Object(h.jsx)("main",{className:"main",children:function(e){switch(e){case"Rose":return Object(h.jsx)(d,{});case"Portfolio":return Object(h.jsx)(O,{});case"Contact":return Object(h.jsx)(j,{});case"About":return Object(h.jsx)(b,{});case"Resume":return Object(h.jsx)(f,{});default:return}}(s.name)}),Object(h.jsxs)("footer",{children:[Object(h.jsx)("h2",{children:"Get your website built!"}),Object(h.jsxs)("div",{id:"social-media",children:[Object(h.jsx)("h4",{children:"Visit me here"}),Object(h.jsx)("a",{href:"https://github.com/rosefrancis-tech",target:"_blank",children:Object(h.jsx)("i",{className:"fab fa-github"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/francis-tech/",target:"_blank",children:Object(h.jsx)("i",{className:"fab fa-linkedin"})}),Object(h.jsx)("a",{href:"https://stackoverflow.com/users/story/14481269",target:"_blank",children:Object(h.jsx)("i",{className:"fab fa-stack-overflow"})})]}),Object(h.jsx)("div",{children:"\xa9 2021 Rose Francis. All rights reserved."})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),o(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.ed8f813f.chunk.js.map