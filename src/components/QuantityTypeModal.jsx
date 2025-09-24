import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const QuantityTypeModal = ({ show, onClose, product, onConfirmAdd }) => {
  if (!product) {
    return null;
  }

  // Calculate the wholesale price based on retail price * 100
  // Ensure robust parsing before calculation
  const retailPriceNumeric = parseFloat(product.price.replace("₹", ""));
  const calculatedWholesalePrice = `₹${(retailPriceNumeric * 100).toFixed(2)}`;

  const handleAddPerKg = () => {
    onConfirmAdd(product, 'retail');
  };

  const handleAddPerQuintal = () => {
    onConfirmAdd(product, 'wholesale');
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">Add {product.name} to Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center mb-3">
          <img src={product.image} alt={product.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} className="me-3 shadow-sm" />
          <div>
            <h5>{product.name}</h5>
            <p className="text-muted small mb-0">{product.description}</p>
          </div>
        </div>
        <hr />
        <p className="mb-2">How would you like to add this product?</p>
        <div className="d-flex justify-content-between my-3">
          <div className="text-center flex-fill me-2 p-3 border rounded shadow-sm">
            <h6 className="text-success mb-1">Per Kg (Retail)</h6>
            <p className="fs-5 fw-bold mb-0">{product.price}</p>
            <p className="text-muted small">({product.priceUnit})</p>
          </div>
          <div className="text-center flex-fill ms-2 p-3 border rounded shadow-sm">
            <h6 className="text-warning mb-1">Per Quintal (Wholesale)</h6>
            {/* Display the calculated wholesale price */}
            <p className="fs-5 fw-bold mb-0">{calculatedWholesalePrice}</p>
            <p className="text-muted small">({product.wholesaleUnit})</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="outline-secondary" onClick={onClose} className="me-2">
          Cancel
        </Button>
        <Button variant="success" onClick={handleAddPerKg} className="me-2">
          Add Per Kg
        </Button>
        <Button variant="primary" onClick={handleAddPerQuintal}>
          Add Per Quintal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuantityTypeModal;