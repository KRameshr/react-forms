import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand text-primary fw-bold fs-3" href="#">
            FormS
          </a>
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
              <a
                className="nav-link active fw-semibold px-3"
                aria-current="page"
                href="#"
                style={{ color: "#0d6efd" }}
              >
                Home
              </a>
              <a className="nav-link px-3 text-dark" href="#">
                Features
              </a>
              <a className="nav-link px-3 text-dark" href="#">
                Pricing
              </a>
              <a className="nav-link px-3 text-dark" href="#">
                About
              </a>
            </div>
            <button className="btn btn-primary ms-3 px-4">Get Started</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
