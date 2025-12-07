import React from "react";
import "../Styles/Update_Products.css";

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

function UpdateProducts() {
  const handleUpdate = (productsID) => {
    // TODO backend:
    // In PHP this used update_form.php?productsID=XX

    window.location.href = "#/update-product";
  };

  const handleGoBack = () => {
    window.location.href = "#/company-dashboard";
  };

  return (
    <div className="up-container">
      <h2>Current Products (Update)</h2>

      {MOCK_PRODUCTS.map((p) => {
        const perUnit = p.productPrice / p.stockQuantity;

        return (
          <div className="up-product" key={p.productsID}>
            <div><strong>{p.productName}</strong></div>
            <div>Type: {p.productType}</div>
            <div>Total Cost: ${p.productPrice}</div>
            <div>Price Per Unit: ${perUnit.toFixed(2)}</div>
            <div>Quantity: {p.stockQuantity}</div>
            <div>Date Stocked: {p.stockDate}</div>

            <div className="up-actions">
              <button onClick={() => handleUpdate(p.productsID)}>
                Update
              </button>
            </div>
          </div>
        );
      })}

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default UpdateProducts;