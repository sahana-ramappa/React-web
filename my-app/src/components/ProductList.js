import React from 'react';
import './ProductList.css';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <section id="my-products" className="product-list">
      <h2>My Products</h2>
      {products.length === 0 ? (
        <p>No products added yet. Start selling now!</p>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
