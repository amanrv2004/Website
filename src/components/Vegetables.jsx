import React from "react";
import ImgTomato from "../assets/images/Vegetables/Tomato.jpg";
import ImgPotato from "../assets/images/Vegetables/Potato.jpg";
import ImgOnion from "../assets/images/Vegetables/Onion.jpg";

const Vegetables = ({ onOpenQuantitySelectionModal, onAddToWishlist }) => {
  const vegetablesProducts = [
  {
    name: "Tomato",
    image: ImgTomato,
    description: "Fresh red tomatoes ideal for cooking and salads.",
    price: "₹30",
    priceUnit: "per kg",
    wholesaleUnit: "per quintal",
    stock: 150,
  },
  {
    name: "Potato",
    image: ImgPotato,
    description: "Organic potatoes rich in starch and taste.",
    price: "₹25",
    priceUnit: "per kg",
    wholesaleUnit: "per quintal",
    stock: 0, // Out of stock example
  },
  {
    name: "Onion",
    image: ImgOnion,
    description: "Essential kitchen staple with bold flavor.",
    price: "₹28",
    priceUnit: "per kg",
    wholesaleUnit: "per quintal",
    stock: 90,
  },
];
  return (
    <div className="container py-5">
      <h2 className="mb-4 border-bottom pb-2">Vegetables</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {vegetablesProducts.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "260px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="fw-bold text-success mb-1">
                    Retail: {item.price} <small>({item.priceUnit})</small>
                  </p>
                  <p className="fw-bold text-warning">
                    Wholesale: ₹{(parseFloat(item.price.replace("₹", "")) * 100).toFixed(2)} <small>({item.wholesaleUnit})</small>
                  </p>
                  <p className={`mb-2 fw-bold ${item.stock > 0 ? 'text-success' : 'text-danger'}`}>
                    {item.stock > 0 ? `In Stock (${item.stock})` : 'Out of Stock'}
                  </p>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-primary w-100" onClick={() => onOpenQuantitySelectionModal(item)}>Add to Cart</button>
                  <button className="btn btn-outline-danger w-100" onClick={() => onAddToWishlist(item)}>Add to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetables;