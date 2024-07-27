import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CompanyList, CompanyDetails } from './pages';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path='/' element={<CompanyList />} />
          <Route path='/details/:companyId' element={<CompanyDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
