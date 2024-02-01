import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./alloc.css";
import Mechreq from "./mechreq";
import { error } from "jquery";

function Tabs({ tableName , customerName, productName, orderNumber}) { 
  const [toggleState, setToggleState] = useState(1);
  const [machines, setMachines] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [partNo, setPartNo] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [quantity, setQuantity] = useState("");
  const scrollBoxRef = useRef(null);
  const [fetchMeterialData, setFetchMeterialData] = useState([]);
  const setFetchMachineData = useRef(null);

  useEffect(() => {
    // Fetch machine names from the backend
    axios
      .get("http://127.0.0.1:8000/machine/name/")
      .then((response) => {
        setMachines(response.data);
      })
      .catch((error) => {
        console.error("Error fetching machine names:", error);
      });

    const today = new Date().toISOString().split("T")[0];
    setStartDate(today);
  }, []);
  const handleDeadlineChange = (e) => {
    setEndDate(e.target.value);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handlePartNumber = (event) => {
    event.preventDefault()
    axios
        .get(`http://127.0.0.1:8000/planner/productno/${tableName}/`)
        .then((response) =>{
          console.log(response.data);
          setPartNo(response.data)
          fetchData()
          fetchQuantity()
          fetchMeterial()
          fetchMachine()
        })
        .catch((error) => {
          console.error("Error fetching part number", error)
        });
  };

  const handleDropdownChange = (event) => {
    // Handle the dropdown change event
    const selectedValue = event.target.value;
   
    // Perform necessary actions with the selected value
  };
  
  const handleNumberChange = (event) => {
    // Handle the number field change event
    const enteredNumber = event.target.value;
    // Perform necessary actions with the entered number
  };

  
  const fetchQuantity = () => {
    axios
      .get(`http://127.0.0.1:8000/planner/product/${orderNumber}/${customerName}/${productName}/`)
      .then((response) => {
        console.log(response.data);
        setQuantity(response.data.quantity);
      })
      .catch((error) => {
        console.error("Error fetching quantity:", error);
      });
  };

  const fetchMeterial = () => {
    axios
      .get(`http://127.0.0.1:8000/planner/fetch-meterial/${tableName}/`)
      .then((response) => {
        console.log(response.data);
        setFetchMeterialData(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching meterial:", error);
      });
  };

  const fetchMachine = () => {
    axios
      .get(`http://127.0.0.1:8000/planner/fetch-machine/${tableName}/`)
      .then((response) => {
        console.log(response.data);
        setFetchMachineData(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching meterial:", error);
      });
  };

 const fetchData = async () => {
   try {
     const response = await axios.get(
       `http://127.0.0.1:8000/planner/fetch-data/${tableName}/`
     );
     console.log(tableName)
    //  if(response.data != null){
    //   const updatedData = response.data.map((item) => {
    //     const multipliedQty = item.Quantity * 5;
    //     return { ...item, qty: multipliedQty };
    //   });
    //  }
     setDataArray(response.data);
     console.log(response.data);
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };

 const handleScroll = () => {
   const scrollBox = scrollBoxRef.current;
   // Perform any scroll-related logic here
   // For example, you can access scrollBox.scrollTop or scrollBox.scrollLeft
 };


// Empty dependency array ensures the effect runs only once on mount

  

const generateTables = () => {
  const tables = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    const formattedDate = currentDate.toISOString().split("T")[0];
    const table = (
      <table className="table table-bordered table-sm" key={formattedDate}>
        <thead className="thead-light">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Shift</th>
            {machines.map((machine, index) => (
              <th key={index} scope="col">
                {machine}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">{formatDate(formattedDate)}</th>
            <th scope="col">morning</th>
            {machines.map((_, index) => (
              <td key={index} scope="col">
                <div className="row">
                  <div className="col-8">
                    <select onChange={handleDropdownChange} defaultValue="" style={{ width: '150px' }}>
                      <option value="" disabled>PartNo</option>
                      {partNo.map((partNo, index) => (
  <option key={index} value={partNo}>{partNo}</option>
))}

                    </select>
                  </div>
                  <div className="col-4">
                    <input type="number" style={{ width: '60px' }} onChange={handleNumberChange} placeholder="Qty" />
                  </div>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="col">{formatDate(formattedDate)}</th>
            <th scope="col">afternoon</th>
            {machines.map((_, index) => (
              <td key={index} scope="col">
                <div className="row">
                  <div className="col-8">
                    <select onChange={handleDropdownChange} defaultValue="" style={{ width: '150px' }}>
                      <option value="" disabled>PartNo</option>
                      {partNo.map((partNo, index) => (
  <option key={index} value={partNo}>{partNo}</option>
))}

                    </select>
                  </div>
                  <div className="col-4">
                    <input type="number" style={{ width: '60px' }} onChange={handleNumberChange} placeholder="Qty" />
                  </div>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="col">{formatDate(formattedDate)}</th>
            <th scope="col">evening</th>
            {machines.map((_, index) => (
              <td key={index} scope="col">
                <div className="row">
                  <div className="col-8">
                    <select onChange={handleDropdownChange} defaultValue="" style={{ width: '150px' }}>
                      <option value="" disabled>PartNo</option>
                      {partNo.map((partNo, index) => (
  <option key={index} value={partNo}>{partNo}</option>
))}

                    </select>
                  </div>
                  <div className="col-4">
                    <input type="number" style={{ width: '60px' }} onChange={handleNumberChange} placeholder="Qty" />
                  </div>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );

    tables.push(table);

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return tables;
};
  

  return (
    <div className="container-fluid" style={{ marginTop: "80px", color: "#a8d2fd" }}>
      <div className="bloc-tabs" id="tabsback">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          BOM Details
          
        </button>
        

        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Material required
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Machines required
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Allocation
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
        
        <div className="col">
  <div className="scrollable-table-container">
    <table className="table scrollable-column table-bordered table-sm" id="talloc">
      <thead className="thead-light table-header">
        <tr className="table-header">
          <th scope="col">Part Number</th>
          <th scope="col">Part Name</th>
          <th scope="col">Material</th>
          <th scope="col">Required Quantity Per Piece</th>
          <th scope="col">Required Quantity for this Order</th>
          <th scope="col">Total Kgs for this Order</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>{item.Part_Number}</td>
            <td>{item.Part_Name}</td>
            <td>{item.Material}</td>
            <td>{item.Quantity}</td>
            <td>
              {item.Quantity * quantity}
            </td>
            <td>{item.Weight * item.Quantity * quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



      </div>

      <div className={toggleState === 2 ? "content active-content" : "content"}>
  <div className="row">
    <div className="scrollable-column rounded border border-dark p-3" style={{backgroundColor:' rgba(224, 232, 245, 0.877)',height: "340px"}}> 
        <table className="table table-bordered table-sm" id="talloc">
          <thead className="thead-light">
            <tr>
              <th scope="col">Material</th>
              <th scope="col">Commodity</th>
              <th scope="col">Required</th>
              <th scope="col">Unit(measure)</th>
            </tr>
          </thead>
          <tbody>
  {fetchMeterialData.map((item, index) => (
    <tr key={index}>
      <td>{item.material}</td>
      <td>{item.count * quantity}</td>
      <td>{item.commodity}</td>
      <td>{item.count * quantity }</td>
      <td>0</td>
    </tr>
  ))}
</tbody>

        </table>
    </div>
  </div>
</div>

<div className={toggleState === 4 ? "content active-content" : "content"}>
    <div className="scrollable-column rounded border border-dark p-3"
      ref={scrollBoxRef}
      style={{ width: "100%", height: "340px", overflow: "auto" }}
      onScroll={handleScroll}
    >
      <table className="table table-bordered table-sm" id="talloc">
        <thead className="thead-light">
          <tr>
            <th style={{ color: "black" }}>Part Number</th>
            <th style={{ color: "black" }}>Part Name</th>
            <th style={{ color: "black" }}>Material</th>
            <th style={{ color: "black" }}>Machines</th>
          </tr>
        </thead>
        <tbody >
          {dataArray.map((item, index) => (
            <tr key={index}>
              <td>{item.Part_Number}</td>
              <td>{item.Part_Name}</td>
              <td>{item.Material}</td>
              <td>{item.Machine}</td>
            </tr>
          ))}
          {machines.map((machine) => (
                          <option key={machine} value={machine}>
                            {machine}</option>
                            ))}
        </tbody>
      </table>
    </div>
      </div>

        <div className={toggleState === 3 ? "content active-content" : "content"}>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    Start Date
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="date"
                      className="form-control"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    End Date
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="date"
                      className="form-control"
                      value={endDate}
                      onChange={handleDeadlineChange}
                    />
                  </div>
                </div>
              </div>

              
              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    Hours Reqd
                  </label>
                  <div className="col-sm-6">
                    <input type="time" className="form-control" id="dtx" />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    Shift Reqd
                  </label>
                  <div className="col-sm-6">
                    <input type="number" className="form-control" id="dtx" />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    Machines
                  </label>
                  <div className="col-sm-6">
                    {machines.length > 0 ? (
                      <select className="form-control" id="dtx">
                        <option>Available</option>
                        {machines.map((machine) => (
                          <option key={machine} value={machine}>
                            {machine}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p>Loading machines...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <br />

          <div className="allocation-table-container">
          <div className="allocation-table-scrollbar">
            {generateTables()}
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-sm">Submit Allocation</button>
        </div>
      </div>
      <button className="btn btn-block custom-done btn-sm text-white" onClick={handlePartNumber}>
              GENERATE
            </button>
    </div>
    
  );
}

export default Tabs;