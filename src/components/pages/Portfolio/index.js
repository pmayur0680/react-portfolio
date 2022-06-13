import React from 'react';
import fitterProject from './assets/images/fitter.png'
import endlessTriviaProject from './assets/images/endless-trivia.png'
import stockSimulatorProject from './assets/images/stock-simulator.png'
import ispProvidersInMyArea from './assets/images/ispprovidersinmyarea.png'
import top10InUSA from './assets/images/top10inusa.png'
import lawyersNearByMe from './assets/images/lawyersnearbyme.png'
import freeWifiNearByMe from './assets/images/freewifinearbyme.png'
import bestEnergyProviders from './assets/images/bestenergyproviders.png'
import tvProvidersGuide from './assets/images/tvprovidersguide.png'
import nrisworld from './assets/images/nrisworld.png'
import topNewSmartphones from './assets/images/topnewsmartphones.png'
import aiuwa from './assets/images/aiuwa.png'
import pwrmd from './assets/images/pwrmd.png'

function ProjectCard(props) {  
  return (    
            <div className="col-6 card container_foto">              
              <div className="ver_mas text-center">
                  <p className="lnr lnr-eye">
                     <h4 style={{color: "#3e7184", fontWeight: "bold" }} className="mt-1">{props.title}</h4>
                  {props.githubrepo &&                  
                    <a 
                      type="button" 
                      href={props.githubrepo} 
                      className="btn btn-light"
                    >GitHub</a> }    <a 
                      type="button"
                      href={props.deployedurl} 
                      className="btn btn-secondary"
                    >Live</a>
              </p>
                  </div>
                  
                  <img src={props.thumbnail} alt={props.title} />                  
                  
               </div>
    );
}
export default function Portfolio() {  
    const Projects = [
          {
            "id": 1,
            "title": "Fiiter - Social Fitness Network",
            "thumbnail": fitterProject,
            "githubrepo": "https://github.com/yummy314159265/Fitter",
            "deployedurl": "https://fitter-bc2022.herokuapp.com/"
        },
        {
            "id": 2,
            "title": "Endless Trivia",
            "thumbnail": endlessTriviaProject,
            "githubrepo": "https://github.com/pmayur0680/Endless-Trivia",
            "deployedurl": "https://triviabymmaac.herokuapp.com/"
        },
        {
            "id": 3,
            "title": "Stock Simulator",
            "thumbnail": stockSimulatorProject,
            "githubrepo": "https://github.com/pmayur0680/Stock-Market-Simulator",
            "deployedurl": "https://pmayur0680.github.io/Stock-Market-Simulator/"
        },        
        {
            "id": 4,
            "title": "ISP Providers",
            "thumbnail": ispProvidersInMyArea,            
            "deployedurl": "https://www.ispprovidersinmyarea.com/"
        },   
        {
            "id": 5,
            "title": "Top 10 in USA",
            "thumbnail": top10InUSA,            
            "deployedurl": "https://www.top10inusa.com/"
        },   
        {
            "id": 6,
            "title": "Lawyers Near Me",
            "thumbnail": lawyersNearByMe,            
            "deployedurl": "http://www.lawyersnearbyme.com/"
        },   
        {
            "id": 7,
            "title": "Free WiFi Near Me",
            "thumbnail": freeWifiNearByMe,            
            "deployedurl": "http://www.freewifinearbyme.com/"
        },   
        {
            "id": 8,
            "title": "Compare Electricity Rates & Plans",
            "thumbnail": bestEnergyProviders,            
            "deployedurl": "https://www.bestenergyproviders.com/"
        },   
        {
            "id": 9,
            "title": "Compare Cable & Satellite TV Providers",
            "thumbnail": tvProvidersGuide,            
            "deployedurl": "https://www.tvprovidersguide.com/"
        },   
        {
            "id": 10,
            "title": "NRI's World",
            "thumbnail": nrisworld,            
            "deployedurl": "http://www.nrisworld.com/"
        },   
        {
            "id": 11,
            "title": "Compare smartphones specs & prices",
            "thumbnail": topNewSmartphones,            
            "deployedurl": "http://www.topnewsmartphones.com/"
        },
        {
          "id": 12,
          "title": "Student Mangement System - AIUWA",
          "thumbnail": aiuwa,            
          "deployedurl": "https://aiu.edu.gm/"
        },       
        {
          "id": 13,
          "title": "Electronic Medical Records (EMR)",
          "thumbnail": pwrmd,            
          "deployedurl": "https://www.pwrmd.com/"
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
