import React, { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      else if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      else if (currentPage === 'Contact') {
        return <Contact />;
      }
      else if (currentPage === 'Resume') {
        return <Resume />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <header>
        <h1>Mayur Patel</h1> 
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>      
      {renderPage()}
      <Footer />
    </>
  );
}
