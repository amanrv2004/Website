import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-3">
            <h5>Fasal Kart</h5>
            <p>Buy grains, vegetables & more directly from farmers.</p>
          </div>

          <div className="col-md-2 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="#" className="text-light text-decoration-none">Wishlist</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Subscribe to our newsletter</h6>
            <form className="d-flex flex-column flex-sm-row gap-2">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center pt-4 mt-4 border-top">
          <p className="mb-0">© 2025 Fasal Kart. All rights reserved.</p>
          <div>
            <a href="#" className="text-light me-3">Instagram</a>
            <a href="#" className="text-light">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;