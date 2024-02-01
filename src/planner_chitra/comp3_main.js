import React, { useState } from "react";
import Banner3 from './banner3';
import Data from "./data";
import Table from "./table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Component3(){
        const isAuthorized = localStorage.getItem("isAuthorized");
        const [tableData, setTableData] = useState("");
        const [custData, setCustData] = useState("");
        const [proData, setProData] = useState("");
        const [orderData, setOrderData] = useState("");

  useEffect(() => {
    // Check if the user is authorized to access this component
    if (isAuthorized !== "Planner" && isAuthorized !== "Admin") {
      // Redirect to the appropriate route if not authorized
      navigate("/"); // Replace '/' with the desired route for unauthorized access
    }
  }, []);
  
  const table = (tableData) => {
    setTableData(tableData);
  };
  const custName = (custData) => {
    setCustData(custData);
  };
  const proName = (proData) => {
    setProData(proData);
  };
  const Orderid = (orderData) => {
    setOrderData(orderData);
  };

  const navigate = useNavigate();

    return(
        <div id="comp3">
          
            <Banner3 name="Product Planning"/>
            <Data table={table} custName={custName} proName={proName} Orderid={Orderid}/>
            <Table tableName = {tableData} customerName= {custData} productName= {proData} orderNumber= {orderData}/>
        </div>       
    );
}
export default Component3;