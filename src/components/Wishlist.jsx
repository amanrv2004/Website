import React from "react";

const Wishlist = ({ wishlistItems, onRemoveFromWishlist, onAddToCart }) => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 border-bottom pb-2 text-center">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-5">
          <p className="lead">Your wishlist is currently empty.</p>
          <p className="text-muted">Browse our products and add items you love!</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {wishlistItems.map((item, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <img
                      src={item.image}
                      className="img-fluid h-100"
                      alt={item.name}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-primary mb-2">{item.name}</h5>
                      <p className="card-text text-muted small flex-grow-1">{item.description}</p>

                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="fw-bold text-success mb-0">
                          Retail: {item.price} <small className="text-muted">({item.priceUnit})</small>
                        </p>
                      </div>

                      <div className="d-grid gap-2 mt-auto">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => onAddToCart(item)}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => onRemoveFromWishlist(index)}
                        >
                          Remove from Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;