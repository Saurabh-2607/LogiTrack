// src/components/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#333', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)' }}>
      <Typography variant="h2" sx={{ color: 'white', marginBottom: '20px' }}>
        Welcome to LogiTrack
      </Typography>
      <Link to="/addproducts" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#6200ea', '&:hover': { backgroundColor: '#3700b3' }, color: 'white' }}>
          Add Products
        </Button>
      </Link>
      <Link to="/products" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#6200ea', '&:hover': { backgroundColor: '#3700b3' }, color: 'white' }}>
          View Products
        </Button>
      </Link>
    </Box>
  );
};

export default HomePage;
