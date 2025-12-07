import React from "react";
import "../Styles/CompanyDashboard.css"; 
function CompanyDashboard() {
  // TODO (backend):
  // In PHP, this came from $_SESSION['companyName'] after login.
  const companyName = "Example Company";

  return (
    <div className="company-dashboard-page">
      <header className="company-header">
        <h1>Product Dashboard</h1>
      </header>

      <div className="company-container">
        <h2>Welcome to the Inventory System</h2>
        <p>Manage your products and track inventory with ease.</p>

        {/* Display company name (mocked for front-end only) */}
        <h3>Welcome, {companyName}!</h3>

        <div className="company-links">
          {/* 
            TODO (routing/backend):
            These originally linked to PHP pages:
              - create_product.php
              - view_products.php
              - delete_view_product.php
              - update_view_product.php
              - view_messages.php
              - ../MySQL_Queries/logout.php*/
          }
          <a href="#/create-products">Add New Product</a>
          <a href="#/view-products">View Product</a>
          <a href="#/delete-products">Delete Product</a>
          <a href="#/update-products">Update Product</a>
          <a href="#/view-messages">View Messages</a>
          <a href="#/">Log Out</a>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
