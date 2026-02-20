import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand text-primary fw-bold fs-3" to="/">
          FormS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link active fw-semibold px-3"
              to="/"
              style={{ color: "#0d6efd" }}
            >
              Home
            </Link>

            <Link className="nav-link px-3 text-dark" to="/features">
              Features
            </Link>

            <Link className="nav-link px-3 text-dark" to="/pricing">
              Pricing
            </Link>

            <Link className="nav-link px-3 text-dark" to="/about">
              About
            </Link>
          </div>

          <button className="btn btn-primary ms-3 px-4">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
