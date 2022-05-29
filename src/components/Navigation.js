import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
   
  return (    
    <nav>
       <ul>
          <li>
            <a 
              href="#home" 
              onClick={ () => handlePageChange('Home') }
              className={currentPage === 'Home' ? 'nav-link-active' : ''}
            >
              About me
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              onClick={ () => handlePageChange('Portfolio') }
              className={currentPage === 'Portfolio' ? 'nav-link-active' : ''}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={ () => handlePageChange('Contact') }
              className={currentPage === 'Contact' ? 'nav-link-active' : ''}
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#resume" 
              onClick={ () => handlePageChange('Resume') }
              className={currentPage === 'Resume' ? 'nav-link-active' : ''}
            >
              Resume
            </a>
          </li>
       </ul> 
    </nav>
  );
}
