import React, { useState } from 'react';
import { useEffect } from 'react';

const MonthNo = () => {
  const numbers = Array.from({ length: 30 }, (_, index) => index + 1);
  const currentDate = new Date();
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedDay, setSelectedDay] = useState(currentDate.toLocaleDateString('en-US', { weekday: 'long' }));
  const [tableColumns, setTableColumns] = useState(['Selected Day']);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), number);
    setSelectedDay(clickedDate.toLocaleDateString('en-US', { weekday: 'long' }));
    setTableColumns([...tableColumns, selectedDay]);
  };

  const getMonthName = (date) => {
    const options = { month: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const getCurrentDate = () => {
      const date = new Date();
      const month = date.toLocaleString('default', { month: 'long' });
      setCurrentMonth(month);
    };

    getCurrentDate();
  }, []);

  

  return (
    <>
    <center><h3>Planner</h3></center>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <div style={{ display: 'flex' }}>
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number)}
              style={{
                border: '1px solid black',
                padding: '5px',
                marginRight: '5px',
                fontSize: '12px',
                color: number === selectedNumber ? 'red' : 'black',
              }}
            >
              {number}
            </button>
          ))}
        </div>
        {selectedNumber && (
          <div>
            <h4>{getMonthName(currentDate)}-{selectedDay}</h4>
          </div>
        )}
      </div>
    </div>



    </>
  );
};
export default MonthNo;