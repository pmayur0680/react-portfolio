import React from 'react';
import Projects from '../../myprojects.json';

function ProjectCard(props) {
  const cardStyle = {
    width: "20rem"
  }
  return (    
        <div className="card mb-4" style={cardStyle}>
          <img className="card-img-top" src={props.thumbnail} alt={props.title}></img>
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.about}</p>
            <a href={props.githubrepo} className="card-link">
                <img src="../assets/images/github-icon.png" alt="GitHub Repo"></img>
            </a>
            <a href={props.deployedurl} className="card-link">            
                <img src="../assets/images/heroku.png" alt="Heroku Deployed"></img>
            </a>
          </div>
        </div> 
    );
}
export default function Portfolio() {  
  return (
    <div className='container-fluid'>
      <h2>Portfolio</h2>
      <div className="cards text-center">  
        { Projects.map((project) => (
          <ProjectCard 
            key = {project.id} 
            title = {project.title} 
            thumbnail = {project.thumbnail}  
            about = {project.about} 
            githubrepo = {project.githubrepo} 
            deployedurl = {project.deployedurl} 
            isherokudeployed = {project.isherokudeployed} 
          />
        ))}
      </div>
    </div>           
  );
}
