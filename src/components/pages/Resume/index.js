import React from 'react';
import resume from './assets/Mayur-Patel-Resume.pdf';

export default function Resume() {
  return (
    <div className= 'bgrecent container-fluid'>
      <h2 className='textbase'>Resume</h2>      
      <a href={resume}>Download my resume</a>
      <h3>Front-end Proficiencies</h3>
      <ul style={{listStyleType: "circle"}}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul style={{listStyleType: "circle"}}>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>      
    </div>
  );
}
