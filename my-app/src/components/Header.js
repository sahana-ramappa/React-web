import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">ShopEasySell</h1>
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#products" className="nav-link">Products</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
