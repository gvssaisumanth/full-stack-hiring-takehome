import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CompanyList, CompanyDetails } from './pages';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Router>
        <div className='app-content'>
          <Routes>
            <Route path='/' element={<CompanyList />} />
            <Route path='/details/:id' element={<CompanyDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
