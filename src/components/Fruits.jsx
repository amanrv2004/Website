import React from "react";
import ImgApple from "../assets/images/Fruits/apple.jpg";
import ImgBanana from "../assets/images/Fruits/banana.jpg";
import ImgMango from "../assets/images/Fruits/mango.jpg";


const Fruits = ({ onOpenQuantitySelectionModal, onAddToWishlist }) => {
  const fruitsProducts = [
  {
    name: "Apple",
    image: ImgApple,
    description: "Fresh juicy apples, handpicked from the orchards.",
    price: "₹120",
    priceUnit: "per kg",
    wholesaleUnit: "per quintal",
    stock: 80,
  },
  {
    name: "Banana",
    image: ImgBanana,
    description: "Sweet and ripe bananas for daily nutrition.",
    price: "₹40",
    priceUnit: "per kg",
    wholesaleUnit: "per quintal",
    stock: 0, // Out of stock example
  },
  {
    name: "Mango",
    image: ImgMango,
    description: "Delicious Alphonso mangoes, rich in flavor.",
    price: "₹150",
    priceUnit: "per kg",
    wholesaleUnit: "per quintal",
    stock: 25,
  },
];

  return (
    <div className="container py-5">
      <h2 className="mb-4 border-bottom pb-2">Fruits</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {fruitsProducts.map((item, index) => (
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

export default Fruits;