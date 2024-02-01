import React, { useState } from 'react';
import './comp3.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [tableRows, setTableRows] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleDayClick = (day) => {
    const selectMonthInput = document.getElementById('select-month');
    const selectYearInput = document.getElementById('select-year');
    selectMonthInput.style.borderColor = 'white'
    selectYearInput.style.borderColor = 'white'
    if (selectedMonth === null) {
      
      console.log(selectMonthInput)
      selectMonthInput.focus();
      selectMonthInput.style.borderColor = '#f30000'
      return;
    }else if (selectedYear === null) {
      
      console.log(selectYearInput)
      selectYearInput.focus();
      selectYearInput.style.borderColor = '#f30000'
      return;
    }
    
    setSelectedDate(day);
    setTableRows([{ shift: '', machine: '', quantity: '' }]);
  };
  

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setSelectedDate(null);
    setTableRows([]);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedDate(null);
    setTableRows([]);
  };
  
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };
  
  const getFutureYears = () => {
    const currentYear = getCurrentYear();
    const futureYears = [];
  
    for (let i = 0; i <= 5; i++) {
      futureYears.push(currentYear + i);
    }
  
    return futureYears;
  };
  

  const getCurrentDate = () => {
    if (!selectedDate || !selectedMonth || !selectedYear) return null;

    const currentDate = new Date(selectedYear, selectedMonth, selectedDate);

    const options = { weekday: 'long' };
    const dayOfWeek = currentDate.toLocaleDateString(undefined, options);
    const month = currentDate.toLocaleDateString(undefined, { month: 'long' });

    return `${month} => ${selectedDate} - ${dayOfWeek}`;
  };

  const handleAddRow = () => {
    setTableRows([...tableRows, { shift: '', machine: '', quantity: '' }]);
  };

  const handleEditRow = (index) => {
    setEditingIndex(index);
  };

  const handleSaveRow = (index) => {
    setEditingIndex(-1);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...tableRows];
    updatedRows[index][field] = value;
    setTableRows(updatedRows);
  };

  const renderTable = () => {
    const shiftOptions = ['Morning', 'Afternoon', 'Night'];
    const machineOptions = ['Machine 1', 'Machine 2', 'Machine 3'];

    return (
      <div className="scrollable-column rounded border" style={{ height: '300px' }}>
        <table className='table table-bordered table-sm'>
          <thead>
            <tr>
              <th colSpan={4}>{getCurrentDate()}</th>
            </tr>
            <tr>
              <th>Shift</th>
              <th>Machine</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    className='form-control form-control-sm'
                    value={row.shift}
                    onChange={(e) => handleInputChange(index, 'shift', e.target.value)}
                    disabled={editingIndex !== index}
                  >
                    <option value=''>Select Shift</option>
                    {shiftOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    className='form-control form-control-sm'
                    value={row.machine}
                    onChange={(e) => handleInputChange(index, 'machine', e.target.value)}
                    disabled={editingIndex !== index}
                  >
                    <option value=''>Select Machine</option>
                    {machineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type='number'
                    className='form-control form-control-sm'
                    placeholder='Quantity'
                    value={row.quantity}
                    onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                    disabled={editingIndex !== index}
                  />
                </td>
                <td>
                  {editingIndex === index ? (
                    <button className='btn btn-success btn-sm m-0' onClick={() => handleSaveRow(index)}>
                      Save
                    </button>
                  ) : (
                    <button className='btn btn-primary btn-sm m-0' onClick={() => handleEditRow(index)}>
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {selectedDate && (
            <tfoot>
              <tr>
                <td colSpan={12}>
                  <div className='text-right'>
                    <button className='btn btn-primary btn-sm m-0' onClick={handleAddRow}>
                      Add
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    );
  };

  const renderCalendar = () => {
    const days = [];
    const currentDate = new Date();
    const currentMonth = selectedMonth !== null ? selectedMonth : currentDate.getMonth();
    const currentYear = selectedYear !== null ? selectedYear : currentDate.getFullYear();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<td key={`empty-${i}`} className='empty-cell' />);
    }

    for (let i = 1; i <= totalDays; i++) {
      const isSelected = selectedDate === i;
      days.push(
        <td
          key={`day-${i}`}
          onClick={() => handleDayClick(i)}
          className={`day ${isSelected ? 'selected' : ''}`}
        >
          {i}
        </td>
      );

      if ((firstDayIndex + i) % 7 === 0) {
        days.push(<tr key={`row-${i / 7}`}>{days.splice(-7)}</tr>);
      }
    }

    while (days.length % 7 !== 0) {
      days.push(<td key={`empty-${days.length}`} className='empty-cell' />);
    }

    return days;
  };

  return (
    <div className='card m-1' id='c3'>
      <div className='card-body'>
        <div className='calendar'>
          <div className='row'>
            <div className='col-3' id='c1'>
              <div className='d-flex align-items-center mb-2'>
                <label htmlFor='select-month' id='dl' style={{width:'60px'}} className='mr-2'>Month:</label>
                <select
                  id='select-month'
                  className='form-control form-control-sm m-1' style={{width:'180px'}}
                  value={selectedMonth !== null ? selectedMonth : ''}
                  onChange={(e) => handleMonthChange(parseInt(e.target.value))}
                >
                  <option value=''>Select Month</option>
                  <option value='0'>January</option>
                  <option value='1'>February</option>
                  <option value='2'>March</option>
                  <option value='3'>April</option>
                  <option value='4'>May</option>
                  <option value='5'>June</option>
                  <option value='6'>July</option>
                  <option value='7'>August</option>
                  <option value='8'>September</option>
                  <option value='9'>October</option>
                  <option value='10'>November</option>
                  <option value='11'>December</option>
                </select>
              </div>
              <div className='d-flex align-items-center mb-2'>
                <label htmlFor='select-year'id='dl' style={{width:'60px'}} className='mr-2'>Year:</label>
                <select
                  id='select-year'
                  className='form-control form-control-sm m-1' style={{width:'180px'}}
                  value={selectedYear !== null ? selectedYear : ''}
                  onChange={(e) => handleYearChange(parseInt(e.target.value))}
                  >
                    <option value=''>Select Year</option>
                     {getFutureYears().map((year) => (
                     <option key={year} value={year}>
                     {year}
                    </option>
                     ))}
                  </select>
              </div>
              <table className='table table-border table-sm' id='caltab'>
                <thead>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>{renderCalendar()}</tbody>
              </table>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col'>{renderTable()}</div>
              </div>
              <div className='row' id='r3'>
                <div className='col-4 input-group-prepend'>
                  <div
                    className='input-group-text'
                    style={{ width: '150px', backgroundColor: 'yellowgreen', borderColor: 'black' }}
                    id='l3'
                  >
                    Expected Status
                  </div>
                </div>
                <div className='col-5'>
                  <div className='input-group input-group-sm  '>
                    <div className='input-group-prepend'>
                      <input
                        type='text'
                        className='input-group-text'
                        style={{ width: '100px', backgroundColor: 'orange', borderColor: 'black' }}
                        placeholder='Pending'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='input-group-text'
                        style={{ width: '105px', backgroundColor: 'green', borderColor: 'black' }}
                        placeholder='Completed'
                      />
                    </div>
                    <div className='input-group-postpend'>
                      <input
                        type='text'
                        className='input-group-text'
                        style={{ width: '100px', backgroundColor: 'blue', borderColor: 'black' }}
                        placeholder='In Progress'
                      />
                    </div>
                    
                    <button type="button" className="btn btn-primary rounded custom-b1">submit Allocation</button>
                    <button type="button" className="btn btn-primary rounded custom-b2">Edit Allocation</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
