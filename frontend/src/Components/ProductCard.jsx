// ProductCard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './ProductCard.css'; // Ensure you import your CSS file

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const projectId = '6708d6ab59c9b368f802b0b3';
    const environmentId = '6708d6ab59c9b368f802b0b4';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://free-ap-south-1.cosmocloud.io/development/api/productsfortest', {
                    headers: {
                        'projectId': projectId,
                        'environmentId': environmentId,
                    },
                });

                console.log(response.data); // Check the structure of the response

                // Check if response is an array or a single object
                if (Array.isArray(response.data)) {
                    setProducts(response.data); // If it's an array
                } else if (response.data && response.data.ProductID) {
                    setProducts([response.data]); // Wrap single product object in an array
                } else {
                    setError("No products found or invalid response structure.");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.ProductID} className="product-card">
                    <h2>{product.Name}</h2>
                    <p>Price: ${product.Price}</p>
                    <p>Category: {product.Category}</p>
                    <p>Stock: {product.Stock}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;