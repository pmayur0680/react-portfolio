import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";

import githubIcon from './assets/images/github-icon.png'
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
import { Icon } from '@iconify/react';
function ProjectCard(props) {  
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (    
            <>
            <div className="col-6 card container_foto">              
              <div className="ver_mas text-center">
                  <p className="lnr lnr-eye">
                  {props.githubrepo &&  
                    <a                      
                      href={props.githubrepo}   
                      title="GitHub Repo"                                          
                    ><Icon icon="akar-icons:github-outline-fill" width="28" />
                    </a> }  
                   <a href="#" onClick={handleShow} title="Project Details">
                  <Icon icon="bx:link" width="28"/></a>
              </p>
                  </div>
                  
                  <img src={props.thumbnail} alt={props.title} />                  
                  
               </div>               
               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>     
                <div class="row gy-4">
                  <div class="col-lg-8">   
                  <img src={props.thumbnail} alt={props.title} style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block"
                  }}/>      
                  </div>
                  <div class="col-lg-4">
                  {props.about &&
                <>
                <h5>About</h5>
                <p>{props.about}</p>
                </>
                }
                {(props.frontend || props.backend) &&
                <>
                <h5>Technologies</h5>
                <p>Frontend: {props.frontend}<br/>
                Backend: {props.backend}</p>
                </>
                }
                {props.role &&
                <>
                <h5>Team</h5>
                <p>Contributors: {props.contributors}<br/>
                Role: {props.role}</p>
                </>
                }
                 {props.githubrepo &&  
                    <a 
                      type="button" 
                      href={props.githubrepo} 
                      className="btn btn-primary"
                    >GitHub</a> }    <a 
                      type="button"
                      href={props.deployedurl} 
                      className="btn btn-info"
                    >Live</a>
                  </div>
                </div>  


              
                </Modal.Body>               
              </Modal>
            </>   
    );
}
export default function Portfolio() {  
    const Projects = [
          {
            "id": 1,
            "title": "University Mangement System - AIUWA",
            "thumbnail": aiuwa,            
            "deployedurl": "https://aiu.edu.gm/",
            "about": `Complete solution for American International University West Africa to make administration work simpler. It has modules for 
            admissions and enrollment management, student dashboard, faculties dashboard, administrative dashboard, user access controls, attendance, university calendar, 
            payment dashboard, grades transcript, and much more.`,
            "frontend": "HTML, CSS, JavaScript, jQuery",
            "backend": "PHP, PostgreSQL",
            "contributors": 5,
            "role": "Database design, admission and enrollment, student dashboard, access control",
          },       
          {
            "id": 2,
            "title": "Electronic Medical Records (EMR)",
            "thumbnail": pwrmd,            
            "deployedurl": "https://www.pwrmd.com/",
            "about": "PowerMD+'s Electronic Medical Record (EMR) is a web based software-as-a-service (SaaS) solution integrating Practice Management, Patient Management, and Patient Portal for small & medium sized medical practices.",
            "frontend": "HTML, CSS, JavaScript, jQuery",
            "backend": "PHP, PostgreSQL",
            "contributors": 5,
            "role": "Database design, patient management, patient portal, medical charts",
          },          
          {
            "id": 3,
            "title": "Endless Trivia",
            "thumbnail": endlessTriviaProject,
            "githubrepo": "https://github.com/pmayur0680/Endless-Trivia",
            "deployedurl": "https://triviabymmaac.herokuapp.com/",
            "about": "Endless Trivia is an application made for trivia enthusiasts who are looking for a challenge, students looking to study a specific topic and people who like to enjoy playing quizzes.",
            "frontend": "JavaScript, Bootstrap, Handlebars",
            "backend": "Node.js, Express.js, REST API, MySQL, Sequelize ",
            "contributors": 5,
            "role": "Backend - REST API & Routes, Frontend - Quiz",
          },
          {
            "id": 4,
            "title": "Stock Simulator",
            "thumbnail": stockSimulatorProject,
            "githubrepo": "https://github.com/pmayur0680/Stock-Market-Simulator",
            "deployedurl": "https://pmayur0680.github.io/Stock-Market-Simulator/",
            "about": "Based on the concept of paper trading, Stock Simulator allows to practice buying and selling stocks without risking real money.",
            "frontend": "JavaScript, jQuery, Moment.js, DataTables, Bulma, Polygon.io API, CoinGecko API",
            "contributors": 3,
            "role": "Overall concept design, Stock & Crypto real-time charts, stock watchlist, latest news",
          },  
          {
            "id": 5,
            "title": "Fiiter - Social Fitness Network",
            "thumbnail": fitterProject,
            "githubrepo": "https://github.com/yummy314159265/Fitter",
            "deployedurl": "https://fitter-bc2022.herokuapp.com/",
            "about": "Fitter is a social network and web based solution to set your exercise routine, meal plan, and fitness goals. Fitter also allows friends to follow each other’s workouts in real time.",
            "frontend": "React, Chakra UI, Nutrition API by Nutritionix",
            "backend": "Node.js, Express.js, MongoDB, GraphQL",
            "contributors": 5,
            "role": "GraphQL schema design, writing mutation resolvers, login, profile",
           },      
        {
            "id": 6,
            "title": "ISP Providers",
            "thumbnail": ispProvidersInMyArea,            
            "deployedurl": "https://www.ispprovidersinmyarea.com/",
            "about": "ISPProvidersinmyarea.com lets user find and compare high speed Internet service providers availbale in their area.",
            "frontend": "HTML, CSS, JavaScript, Bootstrap",
            "backend": "PHP, MySQL",
            "contributors": 1,
            "role": "Designed and developed website from scratch, optimized using Search Engine Optimization",
        },   
        {
            "id": 7,
            "title": "Top 10 in USA",
            "thumbnail": top10InUSA,            
            "deployedurl": "https://www.top10inusa.com/",
            "about": "Top10inusa.com lets user find top places to visit in the United States.",
            "frontend": "HTML, CSS, JavaScript, Bootstrap",
            "backend": "PHP, MySQL",
            "contributors": 1,
            "role": "Designed and developed website from scratch, optimized using Search Engine Optimization"
        },   
        {
            "id": 8,
            "title": "Lawyers Near Me",
            "thumbnail": lawyersNearByMe,            
            "deployedurl": "http://www.lawyersnearbyme.com/",
            "about": "Online lawyers directory to find a lawyer, attorney, or law firm by specialty.",
            "frontend": "HTML, CSS, JavaScript, Bootstrap",
            "backend": "PHP, MySQL",
            "contributors": 1,
            "role": "Designed and developed website from scratch, optimized using Search Engine Optimization"
        },   
        {
            "id": 9,
            "title": "Free WiFi Near Me",
            "thumbnail": freeWifiNearByMe,            
            "deployedurl": "http://www.freewifinearbyme.com/",
            "about": "Online directory to find free WiFi hotspots near you.",
            "frontend": "HTML, CSS, JavaScript, Bootstrap",
            "backend": "PHP, MySQL",
            "contributors": 1,
            "role": "Designed and developed website from scratch, optimized using Search Engine Optimization"
        },   
        {
            "id": 10,
            "title": "Compare Electricity Rates & Plans",
            "thumbnail": bestEnergyProviders,            
            "deployedurl": "https://www.bestenergyproviders.com/",
            "about": "Bestenergyproviders.com lets user find and compare electricity service providers availbale in their area.",
            "frontend": "HTML, CSS, JavaScript, Bootstrap",
            "backend": "PHP, MySQL",
            "contributors": 1,
            "role": "Designed and developed website from scratch, optimized using Search Engine Optimization"
        },   
        {
            "id": 11,
            "title": "Compare Cable & Satellite TV Providers",
            "thumbnail": tvProvidersGuide,            
            "deployedurl": "https://www.tvprovidersguide.com/",
            "about": "TVProvidersGuide.com lets user find and compare cable and satellite TV service providers availbale in their area.",
            "frontend": "HTML, CSS, JavaScript, Bootstrap",
            "backend": "PHP, MySQL",
            "contributors": 1,
            "role": "Designed and developed website from scratch, optimized using Search Engine Optimization"
        },   
        {
            "id": 12,
            "title": "NRI's World",
            "thumbnail": nrisworld,            
            "deployedurl": "http://www.nrisworld.com/",
            "about": "Nrisworld.com is a digital platform to find local Indian service businesses and events in USA.",
            "frontend": "HTML, CSS, JavaScript, Bootstrap",
            "backend": "PHP, MySQL",
            "contributors": 1,
            "role": "Designed and developed website from scratch, optimized using Search Engine Optimization"
        },   
        {
            "id": 13,
            "title": "Compare smartphones specs & prices",
            "thumbnail": topNewSmartphones,            
            "deployedurl": "http://www.topnewsmartphones.com/",
            "about": "Topnewsmartphones.com lets user find and compare new released smartphones, view full specifications and see prices.",
            "frontend": "HTML, CSS, JavaScript, Bootstrap",
            "backend": "PHP, MySQL",
            "contributors": 1,
            "role": "Designed and developed website from scratch, optimized using Search Engine Optimization"
        },
       
    ]
  return (
    <div className= 'container-fluid'>
        <div className="section-title mt-2">
        <h2 className='mb-0'>Portfolio</h2>
        </div>
        <div className="cards text-center">  
        { Projects.map((project) => (
          <ProjectCard             
            key = {project.id} 
            title = {project.title} 
            thumbnail = {project.thumbnail}              
            githubrepo = {project.githubrepo} 
            deployedurl = {project.deployedurl}             
            about = {project.about} 
            frontend = {project.frontend} 
            backend = {project.backend}              
            contributors = {project.contributors} 
            role = {project.role}             
          />
        ))}
      </div>
    </div>           
  );
}
