import React, { useState } from 'react';
import axios from 'axios';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    ProductID: '',
    Name: '',
    Price: '',
    Category: '',
    Stock: ''
  });

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
      // Handle success (e.g., show a success message, clear the form, etc.)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product ID:</label>
        <input
          type="text"
          name="ProductID"
          value={formData.ProductID}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          name="Price"
          value={formData.Price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="Category"
          value={formData.Category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          step="0.01"
          name="Stock"
          value={formData.Stock}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProducts;