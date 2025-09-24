import React from 'react';

const FarmerCTA = ({ setCurrentPage }) => {
  const handleBecomeSellerClick = () => {
    alert("This would lead to a Farmer Registration page!");
    // You could set a specific page state here like setCurrentPage("farmer-registration");
  };

  return (
    <div className="container py-5">
      <div className="bg-success text-white text-center p-5 rounded-4 shadow-lg">
        <h2 className="mb-3 display-5 fw-bold" style={{ fontFamily: 'var(--font-heading)' }}>
          Are You a Farmer? Grow With Us!
        </h2>
        <p className="lead mb-4">
          Connect directly with consumers, expand your market, and get fair prices for your produce.
        </p>
        <button
          className="btn btn-warning btn-lg px-4 py-2"
          onClick={handleBecomeSellerClick}
        >
          Become a Seller
        </button>
      </div>
    </div>
  );
};

export default FarmerCTA;