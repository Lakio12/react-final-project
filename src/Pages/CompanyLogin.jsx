import React, { useState } from "react";
import "../Styles/Company_Login.css";
import { useNavigate } from "react-router-dom";

function CompanyLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    password: "",
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

    // SUPER SIMPLE: Automatically go to dashboard
    alert("Login successful! (front-end only)");
    navigate("/company-dashboard");

    // TODO backend:
  };

  return (
  <div className="company-login-page">
    <div className="main">
      <h1>Warehouse Hut</h1>
      <h3>Enter your credentials</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Enter your company name"
          required
          value={formData.companyName}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <div className="wrap">
          <button type="submit">Login</button>
        </div>
      </form>

      <p>
        Not Registered? <a href="#/company-register">Create an account</a> |{" "}
        <a href="#/">Home</a>
      </p>
    </div>
    </div>
  );
}

export default CompanyLogin;
