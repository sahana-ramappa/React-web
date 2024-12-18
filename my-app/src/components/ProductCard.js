import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image ? URL.createObjectURL(product.image) : ''}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-Description">{product.desc}</p>
    </div>
  );
}

export default ProductCard;
