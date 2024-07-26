import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { CompanyList } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CompanyList />}></Route>
      <Route path='/details/:id' element={<CompanyList />}></Route>
    </Routes>
  );
}

export default App;
