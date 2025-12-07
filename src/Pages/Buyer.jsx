import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Buyer.css";

import iphoneImg from "../Images/iphone.jpg";
import goodsImg from "../Images/goods.webp";
import homeImg from "../Images/home.jpg";

const MOCK_PRODUCTS = [
  {
    productName: "iPhone 15",
    productType: "Electronics",
    productPrice: 1200,
    stockQuantity: 10,
    stockDate: "2024-11-01",
    areaSourced: "Los Angeles, CA",
  },
  {
    productName: "Organic Apples",
    productType: "Groceries",
    productPrice: 20,
    stockQuantity: 40,
    stockDate: "2024-11-10",
    areaSourced: "Fresno, CA",
  },
  {
    productName: "Sofa Set",
    productType: "Furniture",
    productPrice: 800,
    stockQuantity: 5,
    stockDate: "2024-10-20",
    areaSourced: "Anaheim, CA",
  },
];

function Buyer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  function performSearch(query) {
    const q = query.toLowerCase();
    const filtered = MOCK_PRODUCTS.filter(
      (item) =>
        item.productName.toLowerCase().includes(q) ||
        item.productType.toLowerCase().includes(q)
    );
    setResults(filtered);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    performSearch(searchQuery.trim());
  };

  return (
    <div className="buyer-page">

      {/* Menu */}
      <label className="manu">
        <input type="checkbox" className="menu" />
        <div className="toggle">
          <span className="top_line common"></span>
          <span className="middle_line common"></span>
          <span className="bottom_line common"></span>
        </div>

        <div className="slide">
          <h1>Customer's Page</h1>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
      </label>

      {/* Search */}
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search for product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Results */}
      <div className="results">
        {results.length === 0 ? (
          <p>No results yet.</p>
        ) : (
          results.map((item, index) => {
            const unitPrice =
              item.stockQuantity > 0
                ? (item.productPrice / item.stockQuantity).toFixed(2)
                : "N/A";

            return (
              <div className="result-item" key={index}>
                <h3>{item.productName}</h3>
                <p>Type: {item.productType}</p>
                <p>Total Price: ${item.productPrice}</p>
                <p>Unit Price: ${unitPrice}</p>
                <p>Stock Date: {item.stockDate}</p>
                <p>Quantity: {item.stockQuantity}</p>
                <p>Area Sourced: {item.areaSourced}</p>
              </div>
            );
          })
        )}
      </div>

      {/* Cards */}
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={iphoneImg} alt="Electronics" style={{ width: "40%" }} />
            <div className="card-body">
              <h2>Electronics</h2>
              <p className="title">Brand names</p>
              <button className="button" onClick={() => performSearch("Electronics")}>
                Select
              </button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={goodsImg} alt="Groceries" style={{ width: "40%" }} />
            <div className="card-body">
              <h2>Groceries</h2>
              <p className="title">Food</p>
              <button className="button" onClick={() => performSearch("Groceries")}>
                Select
              </button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={homeImg} alt="Furniture" style={{ width: "40%" }} />
            <div className="card-body">
              <h2>Furniture</h2>
              <p className="title">Home goods</p>
              <button className="button" onClick={() => performSearch("Furniture")}>
                Select
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Buyer;
