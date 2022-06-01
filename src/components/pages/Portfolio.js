import React from 'react';
import Projects from '../../myprojects.json';

function ProjectCard(props) {  
  return (    
            <div className="col-6 card container_foto ">
              <div className="ver_mas text-center">
                  <span className="lnr lnr-eye">
                    <a 
                      type="button" 
                      href={props.githubrepo} 
                      className="btn btn-info"
                    >GitHub</a>  <a 
                      type="button"
                      href={props.deployedurl} 
                      className="btn btn-warning"
                    >Live</a> 
              </span>
                  </div>
                  <article className="text-left">
                     <h2 className='text-black'>{props.title}</h2>
                  </article>
                  <img src={props.thumbnail} alt={props.title} />
               </div>
    );
}
export default function Portfolio() {  
  return (
    <div className= 'container-fluid'>
      <h2>Portfolio</h2>      
        <div className="cards text-center">  
        { Projects.map((project) => (
          <ProjectCard             
            key = {project.id} 
            title = {project.title} 
            thumbnail = {project.thumbnail}              
            githubrepo = {project.githubrepo} 
            deployedurl = {project.deployedurl}             
          />
        ))}
      </div>
    </div>           
  );
}
