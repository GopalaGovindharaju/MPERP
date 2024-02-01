import React, { useState } from 'react';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {isChecked ? (
            <p style={{ color: 'green' }}>Approved</p>
          ) : (
            <p style={{ color: 'red' }}>Rejected</p>
          )}  
    </div>
  );
};

export default CheckboxExample;
