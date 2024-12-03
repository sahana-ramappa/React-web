import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <Router>
      <header className="app-header">
        <div className="logo">SellApp</div>
        <nav className="nav-links">
          <Link to="/add-product">Add Product</Link>
          <Link to="/my-products">My Products</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/add-product" element={<ProductForm addProduct={addProduct} />} />
          <Route path="/my-products" element={<ProductList products={products} setProducts={setProducts} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;