import React from "react";

const CustomerPopup = ({ show, onClose, onSave, newRow, setNewRow }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <input
          type="text"
          className="form-control"
          value={newRow.name}
          placeholder="Customer Name"
          onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
        />
        <input
          type="number"
          className="form-control"
          value={newRow.id}
          placeholder="Customer ID"
          onChange={(e) => setNewRow({ ...newRow, id: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          value={newRow.address}
          placeholder="Address"
          onChange={(e) => setNewRow({ ...newRow, address: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          value={newRow.email}
          placeholder="Email"
          onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
        />
        <input
          type="number"
          className="form-control"
          value={newRow.mobileNum}
          placeholder="Mobile Number"
          onChange={(e) => setNewRow({ ...newRow, mobileNum: e.target.value })}
        />
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
};

export default CustomerPopup;
