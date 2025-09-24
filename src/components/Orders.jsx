import React from 'react';

const Orders = () => {
  // Enhanced dummy orders data for demonstration
  const dummyOrders = [
    {
      id: "ORD001",
      date: '2025-07-20',
      total: '₹1250.00',
      status: 'Delivered',
      deliveryDate: '2025-07-23',
      paymentStatus: 'Paid',
      items: [
        { name: 'Apple', quantity: 2, unit: 'kg', price: '₹120', image: "../assets/images/Fruits/apple.jpg" },
        { name: 'Rice', quantity: 1, unit: 'quintal', price: '₹5200', image: '../assets/images/Grains/Rice.jpg' },
      ],
      address: '123 Fasal Lane, Green Valley, AG-45678',
    },
    {
      id: "ORD002",
      date: '2025-07-15',
      total: '₹550.00',
      status: 'Shipped',
      deliveryDate: '2025-07-18 (Expected)',
      paymentStatus: 'Paid',
      items: [
        { name: 'Potato', quantity: 3, unit: 'kg', price: '₹25', image: '../assets/images/Vegetables/Potato.jpg' },
        { name: 'Onion', quantity: 2, unit: 'kg', price: '₹28', image: '../assets/images/Vegetables/Onion.jpg' },
        { name: 'Barley', quantity: 1, unit: 'quintal', price: '₹3000', image: '../assets/images/Grains/Barley.jpg' },
      ],
      address: '456 Kisan Marg, Harvest Town, AG-98765',
    },
    {
      id: "ORD003",
      date: '2025-07-10',
      total: '₹300.00',
      status: 'Processing',
      deliveryDate: '2025-07-14 (Expected)',
      paymentStatus: 'Pending',
      items: [
        { name: 'Tomato', quantity: 5, unit: 'kg', price: '₹30', image: '../assets/images/Vegetables/Tomato.jpg' },
      ],
      address: '789 Seed Plot, Agro City, AG-12345',
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-success';
      case 'Shipped':
        return 'bg-info';
      case 'Processing':
        return 'bg-warning text-dark';
      case 'Cancelled':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  const getPaymentStatusBadgeClass = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-success';
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Refunded':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  };


  return (
    <div className="container py-5">
      <h2 className="mb-4 border-bottom pb-2 text-center">Your Orders</h2>

      {dummyOrders.length === 0 ? (
        <div className="text-center py-5">
          <p className="lead">You haven't placed any orders yet.</p>
          <p className="text-muted">Start shopping to see your order history here!</p>
          {/* You could add a button here to navigate to products page */}
          {/* <button className="btn btn-primary mt-3" onClick={() => setCurrentPage("products")}>Browse Products</button> */}
        </div>
      ) : (
        <div className="row g-4"> {/* Use Bootstrap grid for orders */}
          {dummyOrders.map(order => (
            <div className="col-12" key={order.id}> {/* Each order takes full width */}
              <div className="card shadow-sm border-0 rounded-4 mb-3">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h4 className="card-title mb-1 text-primary">Order #{order.id}</h4>
                      <p className="text-muted small mb-0">Placed on: {order.date}</p>
                    </div>
                    <div>
                      <span className={`badge ${getStatusBadgeClass(order.status)} fs-6 py-2 px-3 me-2`}>{order.status}</span>
                      <span className={`badge ${getPaymentStatusBadgeClass(order.paymentStatus)} fs-6 py-2 px-3`}>{order.paymentStatus}</span>
                    </div>
                  </div>

                  <hr className="my-3" />

                  <h5 className="mb-3">Items:</h5>
                  <ul className="list-group list-group-flush mb-3">
                    {order.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-group-item d-flex align-items-center px-0 py-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                          className="me-3 shadow-sm"
                        />
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-bold">{item.name}</p>
                          <p className="mb-0 text-muted small">{item.quantity} {item.unit} @ {item.price}</p>
                        </div>
                        <span className="fw-bold">₹{(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>

                  <hr className="my-3" />

                  <div className="row text-muted small mb-3">
                    <div className="col-md-6">
                      <strong>Delivery Address:</strong><br />
                      {order.address}
                    </div>
                    <div className="col-md-6 text-md-end">
                      <strong>Estimated Delivery:</strong><br />
                      <span className="text-info fw-bold">{order.deliveryDate}</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                    <h5 className="mb-0 text-dark">Total: <span className="text-success">{order.total}</span></h5>
                    <button className="btn btn-outline-primary btn-sm">View Details</button>
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

export default Orders;