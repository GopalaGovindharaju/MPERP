import React from "react";
import "./popup.css";

const initialDetailState = {
  name: "",
  id: "",
  address: "",
  email: "",
  mobileNum: "",
};

const AddCustomerPopup = ({ onSave, onCancel, newDetail, setNewOrder }) => {
  const handleSave = () => {
    onSave(newDetail);
    setNewOrder(initialDetailState);
  };

  const handleCancel = () => {
    onCancel();
    setNewOrder(initialDetailState);
  };
  return (
    <div className="customer-popup">
      <div className="customer-form">
        <h3>Add Customer Details</h3>
        <input
          type="text"
          value={newDetail.name}
          placeholder="Customer Name"
          onChange={(e) => setNewOrder({ ...newDetail, name: e.target.value })}
        />
        <input
          type="number"
          value={newDetail.id}
          placeholder="Customer ID"
          onChange={(e) => setNewOrder({ ...newDetail, id: e.target.value })}
        />
        <input
          type="text"
          value={newDetail.address}
          placeholder="Address"
          onChange={(e) => setNewOrder({ ...newDetail, address: e.target.value })}
        />
        <input
          type="text"
          value={newDetail.email}
          placeholder="Email"
          onChange={(e) => setNewOrder({ ...newDetail, email: e.target.value })}
        />
        <input
          type="text"
          value={newDetail.mobileNum}
          placeholder="Mobile Number"
          onChange={(e) => setNewOrder({ ...newDetail, mobileNum: e.target.value })}
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

export default AddCustomerPopup;
