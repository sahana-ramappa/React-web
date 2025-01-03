import React, { useState, createContext, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import UserProfile from './components/UserProfile';
import Login from './components/Login';

// Create Auth Context
export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Routes>
          {/* Public Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/*"
            element={isLoggedIn ? <MainApp /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

function MainApp() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [products, setProducts] = useState([]); // State to manage products

  // Function to add a new product
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <header className="app-header">
        <div className="logo">
          <Link to="/profile">SellEasy</Link>
        </div>
        <nav className="nav-links">
          <Link to="/add-product">Add Product</Link>
          <Link to="/my-products">My Products</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/add-product" element={<ProductForm addProduct={addProduct} />} />
          <Route path="/my-products" element={<ProductList products={products} setProducts={setProducts} />} />
          <Route path="/profile" element={<UserProfile setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
