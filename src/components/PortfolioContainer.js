import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
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
      <div>        
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />        
        {renderPage()}
        <Footer />
      </div>
    );
  }
  
