import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo app-header">SellEasy</h1>
      <nav className="nav">
        <a href="#add-product" className="nav-link">Add Product</a>
        <a href="#my-products" className="nav-link">My Products</a>
      </nav>
    </header>
  );
}

export default Header;
