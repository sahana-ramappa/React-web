import React, { useState } from "react";
import "./ProductList.css";

function ProductList({ products, setProducts }) {
  const [soldStatus, setSoldStatus] = useState(products.map(() => false)); // Tracks sold status

  const markAsSold = (index) => {
    const updatedStatus = [...soldStatus];
    updatedStatus[index] = true;
    setSoldStatus(updatedStatus);
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    const updatedStatus = soldStatus.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    setSoldStatus(updatedStatus);
  };

  return (
    <div className="product-list">
      <h2>Products Details </h2>
      {products.length === 0 ? (
        <p>No products added yet. Start selling now!</p>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              {product.desc && <p>Description: {product.desc}</p>}
              {product.image && (
                <img
                  src={URL.createObjectURL(product.image)}
                  alt={product.name}
                  style={{ width: "100px", height: "100px" }}
                />
              )}
              {!soldStatus[index] ? (
                <button className="mark-sold-btn" onClick={() => markAsSold(index)}>
                  Mark as Sold
                </button>
              ) : (
                <button className="delete-btn" onClick={() => deleteProduct(index)}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
