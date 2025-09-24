import React from "react";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container-fluid">

        {/* Home link via logo */}
        <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }}>
          <img
            src="/logo.png"
            alt="Logo"
            width="70"
            height="40"
            className="me-2"
          />
        </a>

        {/* Navbar Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {/* Home Link */}
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products" onClick={(e) => { e.preventDefault(); setCurrentPage("products"); }}>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#orders" onClick={(e) => { e.preventDefault(); setCurrentPage("orders"); }}>
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cart" onClick={(e) => { e.preventDefault(); setCurrentPage("cart"); }}>
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#wishlist" onClick={(e) => { e.preventDefault(); setCurrentPage("wishlist"); }}>
                Wishlist
              </a>
            </li>
          </ul>


          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              aria-label="Search"
              style={{ maxWidth: "250px" }}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

          <div className="dropdown text-end">
            <a
              href="#profile"
              className="d-block link-light text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </a>
            <ul className="dropdown-menu dropdown-menu-end text-small">
              <li>
                <a className="dropdown-item" href="#profile" onClick={(e) => { e.preventDefault(); setCurrentPage("profile"); }}>
                  View Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#signin" onClick={(e) => { e.preventDefault(); setCurrentPage("signin"); }}>
                  Sign In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#signup" onClick={(e) => { e.preventDefault(); setCurrentPage("signup"); }}>
                  Sign Up
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }}>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;