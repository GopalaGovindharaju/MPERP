import React, { useState, useEffect } from "react";
import axios from "axios";
import './comp1.css';
import {useNavigate } from "react-router-dom";
import Banner3 from "../planner_chitra/banner3";
import AddCustomerPopup from "./AddCustomerPopup";

const initialRowState = {
    name: "",
    id:"",
    address: "",
    email: "",
    mobileNum: "",
  };

  function CustData() {
    const isAuthorized = localStorage.getItem("isAuthorized");
    const navigate = useNavigate();
    useEffect(() => {
      if (isAuthorized !== "Customer" && isAuthorized !== "Admin" && isAuthorized !== "Planner") {
        navigate("/"); 
      }
    }, []);

    const [tableData, setTableData] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [newRow, setNewRow] = useState(initialRowState);
    const [showInputFields, setShowInputFields] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    const [showAddOrderPopup, setShowAddOrderPopup] = useState(false);

    useEffect(() => {
        fetchTableData();
      }, []);
    
      const fetchTableData = () => {
        axios.get("http://127.0.0.1:8000/custdata/") // Replace "/api/tableData" with the actual API endpoint URL
          .then(response => {
            setTableData(response.data);
          })
          .catch(error => {
            console.error("Error fetching table data:", error);
          });
      };
    
      const handleEdit = (index) => {
        setEditingRow(index);
        const rowData = tableData[index];
        setNewRow({ ...rowData });
      };
    
      const handleSave = (index) => {
        setEditingRow(null);
        const updatedData = [...tableData];
        updatedData[index] = newRow;
        setTableData(updatedData);
        setHasChanges(true);
      };
    
      const handleAdd = () => {
        setShowAddOrderPopup(true);
      };
    
      const handleAddSave = (newDetail) => {
        setTableData([...tableData, newDetail]);
        setShowAddOrderPopup(false);
    setHasChanges(true);
      };

      const handleAddCancel = () => {
        setShowAddOrderPopup(false);
      };
    
    
      const saveAllChanges = () => {
        axios.post("http://127.0.0.1:8000/custdata/savedata/", tableData) // Replace "/save" with the appropriate backend endpoint URL
          .then(response => {
            console.log("Changes saved successfully");
            setHasChanges(false);
            setNewRow(initialRowState); // Reset the newRow state
        setShowInputFields(false); // Hide the input fields after saving
        setHasChanges(true);
        fetchTableData();
          })
          .catch(error => {
            console.error("Error saving changes:", error);
          });
      };
    
      const renderTableRow = (data, index) => {
        const isEditing = editingRow === index;
        return (
            <tr key={index}>
              <td>
                {isEditing ? (
                  <input
                    type="text" id="custtext" className="form-control"
                    value={newRow.name}
                    placeholder="Customer Name"
                    onChange={(e) =>
                      setNewRow({ ...newRow, name: e.target.value })
                    }
                  />
                ) : (
                  data.name
                )}
              </td>
             
              <td>
                {isEditing ? (
                  <input
                    type="number" id="custtext" className="form-control"
                    value={newRow.custid}
                    placeholder="Customer ID"
                    onChange={(e) =>
                      setNewRow({ ...newRow, custid: e.target.value })
                    }
                  />
                ) : (
                  data.custid
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text" id="custtext" className="form-control"
                    value={newRow.address}
                    placeholder="address"
                    onChange={(e) =>
                      setNewRow({ ...newRow, address: e.target.value })
                    }
                  />
                ) : (
                  data.address
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text" id="custtext" className="form-control"
                    value={newRow.email}
                    placeholder="Email"
                    onChange={(e) =>
                      setNewRow({ ...newRow, email: e.target.value })
                    }
                  />
                ) : (
                  data.email
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="number" id="custtext" className="form-control"
                    value={newRow.mobileNum}
                    placeholder="Mobile Num"
                    onChange={(e) =>
                      setNewRow({ ...newRow, mobileNum: e.target.value })
                    }
                  />
                ) : (
                  data.mobileNum
                )}
              </td>
              
              <td>
                <center>
                  {isEditing ? (
                    <button className="btn btn-block custom-done btn-sm text-white m-2" onClick={() => handleSave(index)}>Save</button>
                  ) : (
                    <button className="btn btn-block custom-done btn-sm text-white m-2" onClick={() => handleEdit(index)}>Edit</button>
                  )}
                </center>
              </td>
            </tr>
          );
        };

        return (
            <>
            <Banner3 name="Customer Details"/>
            <center id="mach"><br></br>
              <table className="table table-sm table-bordered w-75">
                <thead className="thead-light" style={{ alignItems: 'center' }}>
                  <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => renderTableRow(data, index))}
                  {showInputFields && (
                    <tr>
                      <td>
                        <input
                          type="text" id="custtext" className="form-control"
                          value={newRow.name}
                          placeholder="Ravi"
                          onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                        />
                      </td>
                      <td>
                        <input
                          type="number" id="custtext" className="form-control"
                          value={newRow.custid}
                          placeholder="12345"
                          onChange={(e) => setNewRow({ ...newRow, custid: e.target.value })}
                        />
                      </td>
                      <td>
                        <input
                          type="text" id="custtext" className="form-control"
                          value={newRow.address}
                          placeholder="Hosur"
                          onChange={(e) => setNewRow({ ...newRow, address: e.target.value })}
                        />
                      </td>
                      <td>
                        <input
                          type="text" id="custtext" className="form-control"
                          value={newRow.email}
                          placeholder="ravimuthu@gmail.com"
                          onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
                        />
                      </td>
                      <td>
                        <input
                          type="number" id="custtext" className="form-control"
                          value={newRow.mobileNum}
                          placeholder="9842814165"
                          onChange={(e) => setNewRow({ ...newRow, mobileNum: e.target.value })}
                        />
                      </td>
      
                      <td>
                        <center>
                          <button onClick={handleAddSave} className="btn btn-block custom-done btn-sm text-white m-2">Save</button>
                        </center>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {hasChanges && (
                <button onClick={saveAllChanges} className="btn btn-block custom-done btn-sm text-white m-3" style={{marginRight:'8px'}}>Save Changes</button>
              )}
              <button className="btn btn-block custom-done btn-sm text-white m-3" onClick={handleAdd}>Add</button>
            </center>
            {showAddOrderPopup && (
          <AddCustomerPopup
            onSave={handleAddSave}
            onCancel={handleAddCancel}
            newDetail={newRow} // Pass the newRow state
            setNewOrder={setNewRow} // Pass the setNewRow function
          />
        )}
            </>
          );
        }
  export default CustData;  