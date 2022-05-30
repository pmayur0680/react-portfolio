import React, {useState} from 'react';
import Projects from '../../myprojects.json';
import RecentProjects from './RecentProjects';
import CurrentProjects from './CurrentProjects';
import PastProjects from './PastProjects';

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
  const [currentMenu, setCurrentMenu] = useState('Recent');
  const [pageBackground, setpageBackground] = useState('bgrecent container-fluid');
  const handleMenuChange = (menu) => {
    if(menu === 'Recent')
    setpageBackground('bgrecent container-fluid')
    else if(menu === 'Current')
    setpageBackground('bgcurrent container-fluid')
    else if(menu === 'Past')
    setpageBackground('bgpast container-fluid')
    setCurrentMenu(menu)
  };
  
  const renderPortfolio = () => {
    if (currentMenu === 'Recent') {
      return <RecentProjects />;
    }
    else if (currentMenu === 'Current') {
      return <CurrentProjects />;
    }
    else if (currentMenu === 'Past') {
      return <PastProjects />;
    }    
  };
  return (
    <div className= {pageBackground}>
      <h2 className='textbase'>Portfolio</h2>
      <div className='row'>
        <div className='col-3'>
          <h3 
            onMouseOver={ () => handleMenuChange('Recent') }
            className=
              {currentMenu === 'Recent'? 'menu-active p-3': 'p-3 textbase'}
            role="button"  
          >
            Recent
          </h3>
          <h3 
            onMouseOver={ () => handleMenuChange('Current') }
            className=
              {currentMenu === 'Current'? 'menu-active p-3': 'p-3 textbase'}
            role="button"  
          >
            2013 - 2022
          </h3>
          <h3 
            onMouseOver={ () => handleMenuChange('Past') }
            className=
              {currentMenu === 'Past'? 'menu-active p-3': 'p-3 textbase'}
            role="button"  
          >
            2007 - 2012
          </h3>          
        </div>
        <div className='col-9'>
          {renderPortfolio()}
        </div>
      </div>
      
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
