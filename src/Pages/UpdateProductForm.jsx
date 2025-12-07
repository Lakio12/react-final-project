import React, { useState } from "react";
import "../Styles/Update_Product_Form.css";

function UpdateProductForm() {
  // TODO (backend):
  // In PHP, this used:
  //   - $_GET['productsID']
  //   - $_SESSION['companyID']
  //   - SELECT * FROM products WHERE productsID = ? AND companyID = ?
  const [formData, setFormData] = useState({
    productsID: 1,
    productName: "iPhone 15",
    productType: "Electronics",
    productPrice: 1200,
    stockDate: "2024-11-01",
    stockQuantity: 10,
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

    // TODO (backend):
    // In PHP, this posted to ../MySQL_Queries/update_product.php
    // with fields: productsID, productName, productType, productPrice, stockDate, stockQuantity
    console.log("Update product (front-end only):", formData);
    alert("Product updated (front-end only). Check console for data.");
  };

  const handleGoBack = () => {
    // Back to the list of products for updating
    window.location.href = "#/update-products";
  };

  return (
    <div className="update-product-page">
      <div className="upf-container">
        <h2>Update Product</h2>

        <form onSubmit={handleSubmit}>
          {/* hidden product ID (kept for parity with PHP) */}
          <input
            type="hidden"
            name="productsID"
            value={formData.productsID}
          />

          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            required
            value={formData.productName}
            onChange={handleChange}
          />

          <label htmlFor="productType">Product Type:</label>
          <select
            id="productType"
            name="productType"
            required
            value={formData.productType}
            onChange={handleChange}
          >
            <option value="Electronics">Electronics</option>
            <option value="Groceries">Groceries</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Tools">Tools</option>
            <option value="Toys">Toys</option>
          </select>

          <label htmlFor="productPrice">Total Price:</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            required
            value={formData.productPrice}
            onChange={handleChange}
          />

          <label htmlFor="stockDate">Stock Date:</label>
          <input
            type="date"
            id="stockDate"
            name="stockDate"
            required
            value={formData.stockDate}
            onChange={handleChange}
          />

          <label htmlFor="stockQuantity">Quantity:</label>
          <input
            type="number"
            id="stockQuantity"
            name="stockQuantity"
            required
            value={formData.stockQuantity}
            onChange={handleChange}
          />

          <button type="submit">Update Product</button>
          <button type="button" onClick={handleGoBack}>
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProductForm;