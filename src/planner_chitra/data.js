
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './comp3.css';


function Data({table,custName,proName,Orderid}) {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderIDs, setOrderIDs] = useState([]);
  const [productNames, setProductNames] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [deadline, setDeadline] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productName, setproductName] = useState("");
  const [tableName, setTableName] = useState("");
  const [proname, setProName] = useState("");
  const [orderno, setorderno] = useState("");


  useEffect(() => {
    fetchOrderIDs();
  }, []);

  const fetchOrderIDs = () => {
    axios
      .get("http://127.0.0.1:8000/planner/orderid/")
      .then((response) => {
        console.log(response.data);
        setOrderIDs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching order IDs:", error);
      });
  };

  const handleOrderNumberChange = (event) => {
    const selectedOrderNumber = event.target.value;
    setorderno(selectedOrderNumber)
    setOrderNumber(selectedOrderNumber);
    if (selectedOrderNumber) {
      fetchCustomerNames(selectedOrderNumber);
      
    } else {
      resetCustomerData();
    }
  };

  const fetchCustomerNames = (orderNumber) => {
    axios
      .get(`http://127.0.0.1:8000/planner/details/${orderNumber}/`)
      .then((response) => {
        console.log(response.data);
        setProductNames(response.data.product_names);
        setCustomerName(response.data.customer_names);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  };

  const handleProductNameChange = (event) => {
    const selectedProductName = event.target.value;
    setproductName(selectedProductName);
    if (selectedProductName) {
      axios
        .get(`http://127.0.0.1:8000/planner/product/${orderNumber}/${customerName}/${selectedProductName}/`)
        .then((response) => {
          console.log(response.data);
          setProductNumber(response.data.productNumber);
          setDeadline(response.data.deadline);
          setQuantity(response.data.quantity);
          setProName(selectedProductName)
          setTableName(`${customerName}_${selectedProductName}_${response.data.productNumber}`)
          

        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
        
    } else {
      resetProductData();
    }
     
  };

  const shareTableName = (event) =>{
    event.preventDefault();
    if(tableName == ""){
      alert("No Data Present Choose The Data Again");
      resetCustomerData();
    }
    else{
      alert("Data Fetched Click GENERETE To View The Data");
      table(tableName);
      custName(customerName);
      proName(proname);
      Orderid(orderno);

    }
   
    
  }

   const resetCustomerData = () => {
    setProductNames([]);
    setCustomerName("");
    resetProductData();
  };

  const resetProductData = () => {
    setProductNumber("");
    setDeadline("");
    setQuantity("");
  };

 
  return (
    <>
      <div className="card">
        <div className="card-body" id="cb">
          <form>
            <div className="row" id="row1">
              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Order Number
                  </label>
                  <div className="col-sm-5">
                    <select
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={orderNumber}
                      onChange={handleOrderNumberChange}
                    >
                      <option value="">Select Order Number</option>
                      {orderIDs.orderid &&
                        orderIDs.orderid.map((orderId) => (
                          <option key={orderId} value={orderId}>
                            {orderId}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Customer Name
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={customerName}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Product Name
                  </label>
                  <div className="col-sm-5">
                    <select
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={productName}
                      onChange={handleProductNameChange}
                    >
                      <option value="">Select Product Name</option>
                      {productNames.map((productName) => (
                        <option key={productName} value={productName}>
                          {productName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Required Hours
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="time"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      //value={requiredHours}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row" id="row2">
              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Product Number
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={productNumber}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Deadline
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="date"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={deadline}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Quantity
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="number"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={quantity}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="col">
              <button className="btn btn-block custom-done btn-sm text-white" style={{ width: '120px' }} onClick={shareTableName} >
              Fetch Data
            </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      

   
    </>
      
  );
  
}

export default Data;