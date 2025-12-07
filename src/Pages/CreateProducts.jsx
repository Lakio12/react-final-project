import React, { useState } from "react";
import "../Styles/Create_Products.css";

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    type: "Electronics",
    price: "",
    quantity: "",
    stockDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Create product (front-end only):", formData);
    alert("Product submitted (front-end only). Check console for data.");
  };

  const handleGoBack = () => {
    window.location.href = "#/company-dashboard";
  };

  return (
    <div className="product-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="type">Product Type:</label>
        <select
          name="type"
          id="type"
          required
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Electronics">Electronics</option>
          <option value="Groceries">Groceries</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Tools">Tools</option>
          <option value="Toys">Toys</option>
        </select>

        <label htmlFor="price">Total Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          required
          value={formData.price}
          onChange={handleChange}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          required
          value={formData.quantity}
          onChange={handleChange}
        />

        <label htmlFor="stockDate">Stock Date:</label>
        <input
          type="date"
          name="stockDate"
          id="stockDate"
          required
          value={formData.stockDate}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>

      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}

export default CreateProduct;