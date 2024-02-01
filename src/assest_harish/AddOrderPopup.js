import React, { useState } from "react";
import "./popup.css";

const initialOrderState = {
  name: "",
  orderNumber: "",
  productNumber: "",
  productName: "",
  quantity: "",
  orderPlacedDate: "",
  deadline: "",
};

const AddOrderPopup = ({ onSave, onCancel, newOrder, setNewOrder }) => {
  const handleSave = () => {
    onSave(newOrder);
    setNewOrder(initialOrderState);
  };

  const handleCancel = () => {
    onCancel();
    setNewOrder(initialOrderState);
  };

  return (
    <div className="order-popup">
      <div className="order-form">
        <h3>Add Customer Order Details</h3>
        <input
          type="text"
          value={newOrder.name}
          placeholder="Customer Name"
          onChange={(e) => setNewOrder({ ...newOrder, name: e.target.value })}
        />
        <input
          type="number"
          value={newOrder.orderNumber}
          placeholder="Order Number"
          onChange={(e) => setNewOrder({ ...newOrder, orderNumber: e.target.value })}
        />
        <input
          type="number"
          value={newOrder.productNumber}
          placeholder="Product Number"
          onChange={(e) => setNewOrder({ ...newOrder, productNumber: e.target.value })}
        />
        <input
          type="text"
          value={newOrder.productName}
          placeholder="Product Name"
          onChange={(e) => setNewOrder({ ...newOrder, productName: e.target.value })}
        />
        <input
          type="number"
          value={newOrder.quantity}
          placeholder="Quantity"
          onChange={(e) => setNewOrder({ ...newOrder, quantity: e.target.value })}
        />
        <input
          type="date"
          value={newOrder.orderPlacedDate}
          onChange={(e) => setNewOrder({ ...newOrder, orderPlacedDate: e.target.value })}
        />
        <input
          type="date"
          value={newOrder.deadline}
          onChange={(e) => setNewOrder({ ...newOrder, deadline: e.target.value })}
        />
        <div className="button-group">
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOrderPopup;
