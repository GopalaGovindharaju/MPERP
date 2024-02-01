import React, { useState, useRef, useEffect } from "react";
import './comp1.css';

function MachineDetailsPopup({ initialRowState, onSave }) {
  // State to manage the form data for the new machine
  const [newMachine, setNewMachine] = useState(initialRowState);
  const contentContainerRef = useRef();

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMachine({ ...newMachine, [name]: value });
  };

  // Function to handle the save action when the user clicks the "Save" button
  const handleSave = () => {
    onSave(newMachine); 
    setNewMachine(initialRowState); 
  };
  const setPopupHeight = () => {
    const contentHeight = contentContainerRef.current.clientHeight;
    const maxHeight = window.innerHeight * 0.8;
    const popupHeight = Math.min(contentHeight, maxHeight);
    // Set the calculated height for the popup
    contentContainerRef.current.style.maxHeight = `${popupHeight}px`;
  };

  // Call setPopupHeight whenever the popup content changes
  useEffect(() => {
    setPopupHeight();
  }, [newMachine]);

  return (
    <div className="machine-details-popup">
       <div ref={contentContainerRef}>
      <h2>Add New Machine</h2>
      <form>
        <table>
          <tbody>
            {/* Add input fields for each machine detail */}
            <tr>
              <td>
                <label htmlFor="machineName">Machine Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="machineName"
                  name="machineName"
                  value={newMachine.machineName}
                  onChange={handleInputChange}
                  placeholder="Machine Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="machineCode">Machine Code:</label>  
              </td>
              <td>
                <input
                  type="text"
                  id="machineCode"
                  name="machineCode"
                  value={newMachine.machineCode}
                  onChange={handleInputChange}
                  placeholder="Machine Code"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="manufacturer">Manufacturer:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="manufacturer"
                  className="form-control"
                  value={newMachine.manufacturer}
                  placeholder="Manufacturer"
                  name="manufacturer"
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="model">Model:</label>
              </td>
              <td>
              <input
            type="text"
            id="model"
            className="form-control"
            value={newMachine.model}
            placeholder="Model"
            name="model"
            onChange={handleInputChange}
          />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="machineType">Machine Type:</label>
              </td>
              <td>
              <select
            id="machineType"
            className="form-control"
            style={{ width: '80px' }}
            value={newMachine.machineType}
            name="machineType"
            onChange={handleInputChange}
          >
            <option value="">Select Type</option>
            <option value="Welding">Tons</option>
            <option value="Drilling">Bends</option>
            <option value="Fitting">Drills</option>
          </select>
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="capacityValue">Capacity Value:</label>
              </td>
              <td>
              <input
            type="number"
            id="capacityValue"
            className="form-control"
            style={{ width: '80px' }}
            value={newMachine.capacityValue}
            placeholder="Value"
            name="capacityValue"
            onChange={handleInputChange}
          />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="capacityUnit">Capacity Unit:</label>
              </td>
              <td>
              <select
            id="capacityUnit"
            className="form-control"
            style={{ width: '80px' }}
            value={newMachine.capacityUnit}
            name="capacityUnit"
            onChange={handleInputChange}
          >
            <option value="">Select Unit</option>
            <option value="Tons">Tons</option>
            <option value="Bends">Bends</option>
            <option value="Drills">Drills</option>
          </select>
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="purchasedDate">Purchased Date:</label>
              </td>
              <td>
              <input
            type="date"
            id="purchasedDate"
            className="form-control"
            value={newMachine.purchasedDate}
            name="purchasedDate"
            onChange={handleInputChange}
          />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="lastMaintenanceDate">Last Maintenance Date:</label>
              </td>
              <td>
              <input
            type="date"
            id="lastMaintenanceDate"
            className="form-control"
            value={newMachine.lastMaintenanceDate}
            name="lastMaintenanceDate"
            onChange={handleInputChange}
          />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="nextMaintenanceDate">Next Maintenance Date:</label>
              </td>
              <td>
              <input
            type="date"
            id="nextMaintenanceDate"
            className="form-control"
            value={newMachine.nextMaintenanceDate}
            name="nextMaintenanceDate"
            onChange={handleInputChange}
          />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="status">Status:</label>
              </td>
              <td>
              <input
            type="text"
            id="status"
            className="form-control"
            value={newMachine.status}
            placeholder="Status"
            name="status"
            onChange={handleInputChange}
          />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="factoryLocation">Factory Location:</label>
              </td>
              <td>
              <input
            type="text"
            id="factoryLocation"
            className="form-control"
            style={{ width: '250px' }}
            value={newMachine.factoryLocation}
            placeholder="Factory Location"
            name="factoryLocation"
            onChange={handleInputChange}
          />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="machineLocation">Machine Location:</label>
              </td>
              <td>
              <input
            type="text"
            id="machineLocation"
            className="form-control"
            style={{ width: '250px' }}
            value={newMachine.machineLocation}
            placeholder="Machine Location"
            name="machineLocation"
            onChange={handleInputChange}
          />
              </td>
            </tr>
            <td>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </td>
          </tbody>
        </table>
       
      </form>
    </div>
    </div>
  );
}

export default MachineDetailsPopup;
