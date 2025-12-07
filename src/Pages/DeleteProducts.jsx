import React, { useState } from "react";
import "../Styles/Delete_Products.css";

const MOCK_PRODUCTS = [
  {
    productsID: 1,
    productName: "iPhone 15",
    productType: "Electronics",
    productPrice: 1200,
    stockQuantity: 10,
    stockDate: "2024-11-01",
  },
  {
    productsID: 2,
    productName: "Organic Apples Box",
    productType: "Groceries",
    productPrice: 40,
    stockQuantity: 80,
    stockDate: "2024-11-05",
  },
  {
    productsID: 3,
    productName: "Office Desk",
    productType: "Furniture",
    productPrice: 300,
    stockQuantity: 5,
    stockDate: "2024-10-18",
  },
];

function DeleteProducts() {
  // Local state so "Delete" actually removes it from the UI (front-end only)
  const [products, setProducts] = useState(MOCK_PRODUCTS);

  const handleDelete = (productsID) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete product ID ${productsID}? (front-end only)`
    );
    if (!confirmed) return;

    // TODO backend:
    // In PHP, this called:
    //   ../MySQL_Queries/delete_product.php?id=PRODUCT_ID (via fetch POST)
    
    setProducts((prev) =>
      prev.filter((product) => product.productsID !== productsID)
    );
    alert(`Product ${productsID} "deleted" (front-end only).`);
  };

  const handleGoBack = () => {
    // HashRouter-style navigation back to dashboard
    window.location.href = "#/company-dashboard";
  };

  return (
    <div className="delete-products-page">
      <div className="dp-container">
        <h2>Current Products (Delete)</h2>

        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((p) => {
            const pricePerUnit =
              p.stockQuantity > 0 ? p.productPrice / p.stockQuantity : 0;

            return (
              <div className="dp-product" key={p.productsID}>
                <div>Product Name: {p.productName}</div>
                <div>Product Type: {p.productType}</div>
                <div>Total Cost: ${p.productPrice}</div>
                <div>Price Per Unit: ${pricePerUnit.toFixed(2)}</div>
                <div>Quantity: {p.stockQuantity}</div>
                <div>Date Stocked: {p.stockDate}</div>

                <div className="dp-actions">
                  <button type="button" onClick={() => handleDelete(p.productsID)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}

        <button type="button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default DeleteProducts;
