// src/components/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to LogiTrack</h1>
      <Link to="/addproducts">
        <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Add Products</button>
      </Link>
      <Link to="/products">
        <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>View Products</button>
      </Link>
    </div>
  );
};

export default HomePage;
