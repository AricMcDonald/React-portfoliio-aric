import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About';
function App() {
  const [currentPage, setCurrentPage] = useState('');
  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <Router>
    <div>
      <Nav 
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      />
      <Routes>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/portfolio' element={<Portfolio/>}/>
        <Route exact path='/resume' element={<Resume/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
