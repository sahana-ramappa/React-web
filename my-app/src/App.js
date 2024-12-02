import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <ProductForm addProduct={addProduct} />
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
