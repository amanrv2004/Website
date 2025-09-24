import React, { useState, useEffect } from "react";

const Cart = ({ cartItems, onRemoveItem, onIncrementQuantity, onDecrementQuantity }) => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState("");

  const SHIPPING_COST = 50.00;
  const TAX_RATE = 0.05;

  const validCoupons = {
    "FASAL10": 0.10,
    "SAVE20": 0.20,
    "ADITYA50": 0.50,
  };

  useEffect(() => {
    const today = new Date();
    const delivery = new Date(today);
    delivery.setDate(today.getDate() + 3);
    setDeliveryDate(delivery.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const priceValue = parseFloat(item.price.replace("₹", ""));
      return total + item.quantity * (isNaN(priceValue) ? 0 : priceValue);
    }, 0);
  };

  const applyCoupon = () => {
    const code = couponCode.toUpperCase();
    if (validCoupons[code]) {
      const discountPercentage = validCoupons[code];
      const currentSubtotal = getSubtotal();
      const calculatedDiscount = currentSubtotal * discountPercentage;
      setDiscount(calculatedDiscount);
      setCouponApplied(true);
      alert(`Coupon "${couponCode}" applied successfully!`);
    } else {
      setDiscount(0);
      setCouponApplied(false);
      alert("Invalid or expired coupon code.");
    }
  };

  const calculateTotal = () => {
    const subtotal = getSubtotal();
    const totalAfterDiscount = subtotal - discount;
    const tax = totalAfterDiscount * TAX_RATE;
    const grandTotal = totalAfterDiscount + SHIPPING_COST + tax;
    return {
      subtotal: subtotal,
      discount: discount,
      shipping: SHIPPING_COST,
      tax: tax,
      grandTotal: grandTotal,
    };
  };

  const totals = calculateTotal();

  return (
    <div className="container py-5">
      <h2 className="mb-4 border-bottom pb-2 text-center">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <p className="lead">Your cart is empty.</p>
          <p className="text-muted">Looks like you haven't added anything to your cart yet. Start shopping!</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <h4 className="mb-3 text-primary">Items in Cart</h4>
            <div className="list-group mb-4">
              {cartItems.map((item, index) => (
                <div key={index} className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <div className="d-flex align-items-center flex-grow-1 mb-2 mb-md-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "90px", height: "90px", objectFit: "cover", marginRight: "15px", borderRadius: "8px" }}
                      className="shadow-sm"
                    />
                    <div>
                      <h5 className="mb-1 text-dark">{item.name}</h5>
                      <p className="mb-1 text-muted small">{item.description}</p>
                      <p className="mb-1 fw-bold text-success">
                        ₹{parseFloat(item.price.replace("₹", "")).toFixed(2)} x {item.quantity} ({item.priceUnit})
                        {item.type && <span className="text-muted small ms-2">({item.type})</span>}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center border rounded px-2 py-1 me-3">
                      <button
                        className="btn btn-sm btn-outline-secondary border-0"
                        onClick={() => onDecrementQuantity(index)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="fw-bold mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary border-0"
                        onClick={() => onIncrementQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                    <button className="btn btn-danger btn-sm" onClick={() => onRemoveItem(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <h4 className="mb-3 text-primary">Order Summary</h4>
            <div className="card shadow-sm border-0 rounded-3 p-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Subtotal:
                  <span>₹{totals.subtotal.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping:
                  <span>₹{totals.shipping.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Tax ({(TAX_RATE * 100).toFixed(0)}%):
                  <span>₹{totals.tax.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0 text-success fw-bold">
                  Discount:
                  <span>- ₹{totals.discount.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0 fs-5 fw-bold">
                  Grand Total:
                  <span>₹{totals.grandTotal.toFixed(2)}</span>
                </li>
              </ul>

              <div className="mt-4">
                <h5 className="mb-2">Have a coupon?</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button className="btn btn-outline-primary" type="button" onClick={applyCoupon}>
                    Apply
                  </button>
                </div>
                {couponApplied && <p className="text-success small">Coupon applied!</p>}
              </div>

              <div className="mt-4">
                <h5 className="mb-2">Estimated Delivery</h5>
                <p className="text-muted">
                  Your order is expected to arrive by: <br />
                  <span className="fw-bold text-info">{deliveryDate}</span>
                </p>
              </div>

              <button className="btn btn-success btn-lg mt-3 w-100">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;