import React from 'react';
import endlessTriviaProject from './assets/images/endless-trivia.png'
import stockSimulatorProject from './assets/images/stock-simulator.png'
import textEditorProject from './assets/images/text-editor.png'
import contactDirectoryProject from './assets/images/contact-directory.png'
import TechBlogProject from './assets/images/the-tech-blog.png'
import noteTakerProject from './assets/images/note-taker.png'

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
    const Projects = [
        {
            "id": 1,
            "title": "Endless Trivia",
            "thumbnail": endlessTriviaProject,
            "githubrepo": "https://github.com/pmayur0680/Endless-Trivia",
            "deployedurl": "https://triviabymmaac.herokuapp.com/"
        },
        {
            "id": 2,
            "title": "Stock Simulator",
            "thumbnail": stockSimulatorProject,
            "githubrepo": "https://github.com/pmayur0680/Stock-Market-Simulator",
            "deployedurl": "https://pmayur0680.github.io/Stock-Market-Simulator/"
        },
        {
            "id": 3,
            "title": "PWA Text Editor",
            "thumbnail": textEditorProject,
            "githubrepo": "https://github.com/pmayur0680/pwa-text-editor",
            "deployedurl": "https://jate-text-editor22.herokuapp.com/"
        },
        {
            "id": 4,
            "title": "PWA Contact App",
            "thumbnail": contactDirectoryProject,
            "githubrepo": "https://github.com/pmayur0680/contact-directory-app",
            "deployedurl": "https://intense-fortress-87690.herokuapp.com/"
        },
        {
            "id": 5,
            "title": "The Tech Blog",        
            "thumbnail": TechBlogProject,        
            "githubrepo": "https://github.com/pmayur0680/The-Tech-Blog",
            "deployedurl": "https://serene-ridge-42390.herokuapp.com/"
        },   
        {
            "id": 6,
            "title": "Note Taker",
            "thumbnail": noteTakerProject,
            "githubrepo": "https://github.com/pmayur0680/note-taker",
            "deployedurl": "https://note-taker-0422.herokuapp.com/notes"
        }    
    ]
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
