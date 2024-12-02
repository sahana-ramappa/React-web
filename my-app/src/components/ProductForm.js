import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: null, // Image as a file
  });
  const [preview, setPreview] = useState(null); // To preview uploaded image

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      setPreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price && product.image) {
      addProduct(product); // Add product to the list
      setProduct({ name: '', price: '', image: null });
      setPreview(null); // Clear form and preview
    } else {
      alert('Please fill out all fields and upload an image.');
    }
  };

  return (
    <section id="add-product" className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </label>
        <label>
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </label>
        {preview && (
          <div className="image-preview">
            <p>Image Preview:</p>
            <img src={preview} alt="Preview" className="preview-image" />
          </div>
        )}
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

export default ProductForm;
