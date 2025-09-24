import React from 'react';
import ImgWheat from "../assets/images/Grains/Wheat.jpg";
import ImgApple from "../assets/images/Fruits/apple.jpg";
import ImgTomato from "../assets/images/Vegetables/Tomato.jpg";
import ImgRice from "../assets/images/Grains/Rice.jpg";


const FeaturedProducts = ({ onOpenQuantitySelectionModal, onAddToWishlist }) => {
  const featuredProductsData = [
    {
      name: "Wheat",
      image: ImgWheat,
      description: "High-quality whole wheat, rich in fiber.",
      price: "₹40",
      priceUnit: "per kg",
      wholesaleUnit: "per quintal",
      stock: 50,
    },
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
      name: "Tomato",
      image: ImgTomato,
      description: "Fresh red tomatoes ideal for cooking and salads.",
      price: "₹30",
      priceUnit: "per kg",
      wholesaleUnit: "per quintal",
      stock: 150,
    },
    {
    name: "Rice",
      image: ImgRice,
      description: "Long grain basmati rice, perfect for biryani.",
      price: "₹60",
      priceUnit: "per kg",
      wholesaleUnit: "per quintal",
      stock: 0, 
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-5 border-bottom pb-2 text-center">Featured Products & Best Sellers</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"> {}
        {featuredProductsData.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "180px", objectFit: "cover" }} 
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text small text-muted">{item.description}</p>
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
                  <button
                    className="btn btn-primary btn-sm w-100" 
                    onClick={() => onOpenQuantitySelectionModal(item)}
                    disabled={item.stock === 0}
                  >
                    {item.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button className="btn btn-outline-danger btn-sm w-100" onClick={() => onAddToWishlist(item)}>Add to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;