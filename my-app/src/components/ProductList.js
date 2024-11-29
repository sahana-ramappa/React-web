import React from 'react';
import './ProductList.css';
import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: '$999', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Phone', price: '$699', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Headphones', price: '$199', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="product-list" id="products">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
