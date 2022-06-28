import React from 'react';

export default function Home() {
  return (
    <div>
        <div className="hero">
          <div className="hero-text">
             A full stack web developer from Houston, TX.
          </div>      
        </div>
        <div className='container-fluid'>
        <div className="section-title mt-2">
        <h2 className='mb-0'>About me</h2>
        </div>
        <p className='mt-0'>Dedicated Full-stack web developer with 18 years of experience in front-end and back-end languages to create a more interactive user interface on the web. With a master's degree in computer applications and recent certification as a full-stack web developer, brings a deep knowledge of modern HTML, CSS, Bootstrap, JavaScript, Data Structure, NodeJS, React, REST API, GraphQL, PHP, and more. Demonstrated and utilized strong technical expertise, leadership, and skills to produce robust software and web applications for university students, healthcare personnel, and the community. Excited to leverage my skills as part of a fast-paced, quality-driven team to deliver better digital experiences.</p>
  <div className="row">
    <div className="col-lg-3 ml-3">
      <h4>Front-end</h4>
      <ul style={{listStyleType: "circle"}}>
        <li>HTML 5</li>
        <li>Advanced CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Responsive Design</li>        
        <li>Bootstrap</li>
        <li>Bulma</li>
        <li>Chakra UI</li>
        <li>Handlebars</li>
        <li>APIs</li>
      </ul>
    </div>
    <div className="col-lg-3 ml-3">
      <h4>Back-end</h4>
      <ul style={{listStyleType: "circle"}}>
        <li>Node</li>
        <li>Express</li>
        <li>RESTful API</li>
        <li>Sequelize</li>        
        <li>Mongoose</li>
        <li>GraphQL</li>
      </ul>
    </div>
    <div className="col-lg-3 ml-3">
      <h4>Data Structure</h4>
      <ul style={{listStyleType: "circle"}}>
        <li>Linked Lists</li>
        <li>Stacks</li>
        <li>Queues</li>
        <li>Hash Tables</li>                
        <li>Trees</li>
        <li>Heaps</li>
        <li>Graphs</li>
      </ul>  
    </div>
    <div className="col-lg-3 ml-3">
    <h4>Database</h4>
      <ul style={{listStyleType: "circle"}}>
        <li>MySQL</li>
        <li>SQL Server</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>                
      </ul>  
    </div>
</div>          
        </div>
    </div>
  );
}
