// src/App.jsx
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

import Buyer from "./Pages/Buyer";
import Contact from "./Pages/Contact";
import CompanyLogin from "./Pages/CompanyLogin";
import CompanyRegister from "./Pages/CompanyRegister";
import CompanyDashboard from "./Pages/CompanyDashboard";
import CreateProducts from "./Pages/CreateProducts";
import ViewProducts from "./Pages/ViewProducts";
import UpdateProducts from "./Pages/UpdateProducts";
import UpdateProductForm from "./Pages/UpdateProductForm";
import DeleteProducts from "./Pages/DeleteProducts";
import ViewMessages from "./Pages/ViewMessages";

function Home() {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1 className="home-title">Warehouse Hut</h1>
        <p className="home-subtitle">Begin Searching as a customer!</p>
        <p className="home-subtitle">
          If a business: Create an Account or Log in!
        </p>

        <div className="home-buttons">
          <Link to="/company-login">
            <button type="button" className="home-button">
              Company
            </button>
          </Link>

          <Link to="/buyer">
            <button type="button" className="home-button">
              Customer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Customer side */}
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/contact" element={<Contact />} />

        {/* Company side */}
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/create-products" element={<CreateProducts />} />
        <Route path="/delete-products" element={<DeleteProducts />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/update-products" element={<UpdateProducts />} />
        <Route path="/update-product" element={<UpdateProductForm />} />
        <Route path="/view-messages" element={<ViewMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
