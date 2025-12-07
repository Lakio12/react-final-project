import React, { useState } from "react";
import "../Styles/Create_Account.css";

function CompanyRegister() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    password: "",
    repassword: "",
    mobile: "",
    store_type: "Retail",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone formatting
    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "");
      const formatted = formatPhoneNumber(digitsOnly);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatPhoneNumber = (value) => {
    const phonePattern = /^(\d{0,3})(\d{0,3})(\d{0,4})$/;
    const match = value.match(phonePattern);
    if (match) {
      const [, areaCode, prefix, lineNumber] = match;
      if (lineNumber) {
        return `(${areaCode}) ${prefix}-${lineNumber}`;
      } else if (prefix) {
        return `(${areaCode}) ${prefix}`;
      } else if (areaCode) {
        return `(${areaCode}`;
      }
    }
    return value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.repassword) {
      alert("Passwords do not match.");
      return;
    }

    // TODO (backend):
    // Original form posted to: ../MySQL_Queries/register.php
   
    console.log("Registration submitted (front-end only):", formData);
    alert("Registration submitted (front-end only). Check console.");
  };

  const handleGoBack = () => {
    window.location.href = "#/company-login";
  };

  return (
    <div className="main">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="company_name">Company Name:</label>
        <input
          type="text"
          id="company_name"
          name="companyName"
          required
          value={formData.companyName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="companyEmail"
          required
          value={formData.companyEmail}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
          title="Password must contain 8 characters, 1 number, 1 special character"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="repassword">Re-type Password:</label>
        <input
          type="password"
          id="repassword"
          name="repassword"
          required
          value={formData.repassword}
          onChange={handleChange}
        />

        <label htmlFor="mobile">Phone Number:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          maxLength={14}
          required
          value={formData.mobile}
          onChange={handleChange}
        />

        <label htmlFor="store">Type of Store:</label>
        <select
          id="store"
          name="store_type"
          required
          value={formData.store_type}
          onChange={handleChange}
        >
          <option value="Retail">Retail</option>
          <option value="Family Owned">Family Owned</option>
          <option value="Online Marketplace">Online</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}

export default CompanyRegister;