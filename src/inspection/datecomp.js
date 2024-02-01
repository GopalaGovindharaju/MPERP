import React, { useState, useEffect } from 'react';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the date every second (1000ms)

    return () => {
      clearInterval(timer); // Clean up the timer when the component unmounts
    };
  }, []);

  return (
    <div>
      <p>{currentDate.toDateString()}</p>
    </div>
  );
};

export default DateComponent;
