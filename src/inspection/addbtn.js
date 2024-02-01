import React, { useState } from 'react';

function DataDisplay() {
  const [dataList, setDataList] = useState([]);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const handleAddData = () => {
    const isValid = validateData(); // Perform your validation logic
    if (isValid) {
      // Perform the logic to add data

      // Show the success message
      setShowSuccessMsg(true);

      // Reset the success message after 2 seconds
      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 2000);
    } else {
      // Show the error message
      setShowErrorMsg(true);

      // Hide the error message after 2 seconds
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 2000);
    }
  };

  const validateData = () => {
    // Implement your validation logic here
    // Check if required columns are filled or any other validation criteria
    // Return true if data is valid, false otherwise
    return true; // Placeholder, replace with your validation code
  };

  return (
    <div>
      <button className="btn text-white btn-sm btn-block" style={{width: '80px', backgroundColor:'#5E7D7E'}} onClick={handleAddData}>ADD</button>
      {showSuccessMsg && <p>Data added successfully!</p>}
      {showErrorMsg && <p>Fill the required columns.</p>}
      <ul>
        {dataList.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
