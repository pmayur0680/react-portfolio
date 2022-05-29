import React from 'react';

export default function Portfolio() {
  const cardStyle = {
    width: "20rem"
  }
  return (
    <div className='container-fluid'>
      <h2>Portfolio</h2>
      <div className="cards text-center">  
        <div className="card mb-4" style={cardStyle}>
          <img className="card-img-top" src="assets/images/endless-trivia.png" alt="Endless Trivia"></img>
          <div className="card-body">
            <h3 className="card-title">Endless Trivia</h3>
            <p className="card-text">Endless Trivia is an application made for trivia enthusiasts who are looking for a challenge, students looking to study a specific topic and people who like to pass time with quizzes.</p>
            <a href="https://github.com/pmayur0680/Endless-Trivia" className="card-link">
                <img src="../assets/images/github-icon.png" alt="GitHub Repo"></img>
            </a>
            <a href="https://triviabymmaac.herokuapp.com/" className="card-link">
                <img src="../assets/images/heroku.png" alt="Heroku Deployed"></img>
            </a>
          </div>
        </div> 
        <div className="card mb-4" style={cardStyle}>
          <img className="card-img-top" src="assets/images/stock-simulator.png" alt="Stock Simulator"></img>
          <div className="card-body">
            <h3 className="card-title">Stock Simulator</h3>
            <p className="card-text">With use of real-time APIs, Stock Simulator allows an investor to practice buying and selling stocks without risking real money.</p>
            <a href="https://github.com/pmayur0680/Stock-Market-Simulator" className="card-link">
                <img src="../assets/images/github-icon.png" alt="GitHub Repo"></img>
            </a>  <a href="https://pmayur0680.github.io/Stock-Market-Simulator/" 
                    className="btn btn-info ml-3">View Live</a>              
          </div>
        </div> 
        <div className="card mb-4" style={cardStyle}>
          <img className="card-img-top" src="assets/images/the-tech-blog.png" alt="The Tech Blog"></img>
          <div className="card-body">
            <h3 className="card-title">The Tech Blog</h3>
            <p className="card-text">CMS-style blog using Handlebars.js and Sequelize that allow users to publish their blog posts and comment on other user post.</p>
            <a href="https://github.com/pmayur0680/The-Tech-Blog" className="card-link">
                <img src="../assets/images/github-icon.png" alt="GitHub Repo"></img>
            </a>
            <a href="https://serene-ridge-42390.herokuapp.com/" className="card-link">
                <img src="../assets/images/heroku.png" alt="Heroku Deployed"></img>
            </a>
          </div>
        </div> 
      </div>
    </div>           
  );
}
