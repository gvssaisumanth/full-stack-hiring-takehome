import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './page-not-found.css';

export const PageNotFound: React.FC = () => {
  return (
    <div className='page-not-found'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Button type='primary'>
        <Link to='/'>Go to Home</Link>
      </Button>
    </div>
  );
};
