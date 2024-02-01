import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './comp3.css'
import CollapsibleColumnsTable from "./alloc";

function Table({tableName,customerName,productName,orderNumber}){
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
    return(
        <div className="container-fluid border border-dark" style={{marginTop:'-50px'}}>
          <CollapsibleColumnsTable tableName={tableName} customerName={customerName} productName = {productName} orderNumber = {orderNumber}/>
      </div>

        );
}
export default Table;
