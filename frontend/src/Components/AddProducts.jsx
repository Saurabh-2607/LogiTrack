import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Alert component for Snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Function to generate a Product ID in the format: 2 uppercase letters + 4 digits
const generateProductID = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  
  // Generate the first two characters as uppercase letters
  let result = '';
  for (let i = 0; i < 2; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  
  // Generate the last four characters as digits
  for (let i = 0; i < 4; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  
  return result;
};

const AddProducts = () => {
  const [formData, setFormData] = useState({
    ProductID: generateProductID(), // Generate initial ProductID
    Name: '',
    Price: '',
    Category: '',
    Stock: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // Reset ProductID whenever the component mounts
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      ProductID: generateProductID() // Generate a new ProductID each time the component mounts
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://free-ap-south-1.cosmocloud.io/development/api/productsfortest',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'projectId': '6708d6ab59c9b368f802b0b3',
            'environmentId': '6708d6ab59c9b368f802b0b4'
          }
        }
      );
      console.log('Response:', response.data);
      // Show success message
      setSnackbarMessage('Your product has been added successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      
      // Clear the form after submission
      setFormData({
        ProductID: generateProductID(), // Generate a new ProductID
        Name: '',
        Price: '',
        Category: '',
        Stock: ''
      });
    } catch (error) {
      console.error('Error:', error);
      // Show error message
      setSnackbarMessage('Error adding product. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      {/* Heading for the page */}
      <Typography variant="h4" sx={{ marginBottom: 3, color: 'white', textAlign: 'center' }}>
        Add a New Product
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px', // Add padding for aesthetics
          borderRadius: '8px', // Rounded corners
          backgroundColor: '#333', // Dark background color
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', // Box shadow for depth
        }}
      >
        <TextField
          label="Product ID"
          name="ProductID"
          value={formData.ProductID}
          onChange={handleChange}
          required
          variant="standard"
          sx={{ marginBottom: 2 }}
          InputProps={{
            readOnly: true, // Make the field read-only
            sx: { color: 'white' }
          }}
          InputLabelProps={{
            sx: { color: 'white' }
          }}
        />
        <TextField
          label="Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          required
          variant="standard"
          sx={{ marginBottom: 2 }}
          InputProps={{
            sx: { color: 'white' }
          }}
          InputLabelProps={{
            sx: { color: 'white' }
          }}
        />
        <TextField
          label="Price"
          name="Price"
          type="number"
          step="0.01"
          value={formData.Price}
          onChange={handleChange}
          required
          variant="standard"
          sx={{ marginBottom: 2 }}
          InputProps={{
            sx: { color: 'white' }
          }}
          InputLabelProps={{
            sx: { color: 'white' }
          }}
        />
        <TextField
          label="Category"
          name="Category"
          value={formData.Category}
          onChange={handleChange}
          required
          variant="standard"
          sx={{ marginBottom: 2 }}
          InputProps={{
            sx: { color: 'white' }
          }}
          InputLabelProps={{
            sx: { color: 'white' }
          }}
        />
        <TextField
          label="Stock"
          name="Stock"
          type="number"
          step="0.01"
          value={formData.Stock}
          onChange={handleChange}
          required
          variant="standard"
          sx={{ marginBottom: 2 }}
          InputProps={{
            sx: { color: 'white' }
          }}
          InputLabelProps={{
            sx: { color: 'white' }
          }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ 
            backgroundColor: '#6200ea', 
            color: 'white', 
            '&:hover': { backgroundColor: '#3700b3' },
            marginTop: '10px' // Spacing above the button
          }}
        >
          Add Product
        </Button>
      </Box>

      {/* Snackbar for showing messages */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddProducts;
