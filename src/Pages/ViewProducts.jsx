import React from "react";
import "../Styles/View_Products.css";

const MOCK_PRODUCTS = [
  {
    productName: "iPhone 15",
    productType: "Electronics",
    productPrice: 6000,
    stockQuantity: 10,
    stockDate: "2025-12-06",
  },
  {
    productName: "Organic Apples Box",
    productType: "Groceries",
    productPrice: 400,
    stockQuantity: 50,
    stockDate: "2024-12-05",
  },
  {
    productName: "Office Desk",
    productType: "Furniture",
    productPrice: 2000,
    stockQuantity: 5,
    stockDate: "2025-11-18",
  },
];

function ViewProducts() {
  // TODO (backend):
  // This was PHP:
  //   SELECT * FROM products WHERE companyID = :companyID
  // using $_SESSION['companyID'].
  //
  // In React, you'd typically do:
  //   useEffect(() => { fetch("/api/products?companyID=...") ... }, [])
  const products = MOCK_PRODUCTS;

  const handleGoBack = () => {
    window.location.href = "#/company-dashboard";
  };

  return (
    <div className="view-products-page">
      <div className="vp-container">
        <h2>Current Products</h2>

        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((p, index) => {
            const pricePerUnit =
              p.stockQuantity > 0 ? p.productPrice / p.stockQuantity : 0;

            return (
              <div className="vp-product" key={index}>
                <div>Product Name: {p.productName}</div>
                <div>Product Type: {p.productType}</div>
                <div>Total Cost: ${p.productPrice}</div>
                <div>Price Per Unit: ${pricePerUnit.toFixed(2)}</div>
                <div>Quantity: {p.stockQuantity}</div>
                <div>Date Stocked: {p.stockDate}</div>
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

export default ViewProducts;