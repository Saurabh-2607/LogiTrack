import React from 'react';

const Card = ({ name, price, description, image, stock }) => {
    return (
        <div className="rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-64 object-cover" 
            />
            <div>
            <span className="product-name">{name}</span><span className="product-price"> ● ${price}</span>
            <p className="product-description">{description}</p>
            <p className="product-stock">{stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
            </div>
        </div>
    );
};

export default Card;