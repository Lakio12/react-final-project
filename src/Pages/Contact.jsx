import React, { useState } from "react";
import "../Styles/Contact.css";

const MOCK_COMPANIES = [
  { companyID: 1, companyName: "Example Company A" },
  { companyID: 2, companyName: "Example Company B" },
  { companyID: 3, companyName: "Example Company C" },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyID: "",
    message: "",
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

    // TODO backend: would send this to a server
    console.log("Contact form submitted (front-end only):", formData);
    alert("Message submitted (front-end only). Check console for data.");
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> supportWarehouseHut@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (657) 256-1876
        </p>
        <p>
          <strong>Address:</strong> 1327 Sterling Way Ave, Fullerton, CA
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="companyID"
          required
          value={formData.companyID}
          onChange={handleChange}
        >
          <option value="">Select Company</option>
          {MOCK_COMPANIES.map((company) => (
            <option key={company.companyID} value={company.companyID}>
              {company.companyName}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>

      <button type="button" onClick={() => (window.location.href = "#/buyer")}>
        Go Back
      </button>
    </div>
  );
}

export default Contact;
