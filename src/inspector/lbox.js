import React from "react";
import './Table.css'
import Table from "./Table";
import Banner3 from '../planner_chitra/banner3'
import Box from "./topbox";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lbox() {
    const isAuthorized = localStorage.getItem("isAuthorized");
    const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is authorized to access this component
    if (isAuthorized !== "Inspector" && isAuthorized !== "Admin") {
      // Redirect to the appropriate route if not authorized
      navigate("/"); // Replace '/' with the desired route for unauthorized access
    }
  }, []);

  
    return (
        <div className="container-fluid custom-cardbdy">
            <Banner3 name="QC"/><br></br>
            <Box/><br></br>
            <Table/>
        </div>
    );
}
export default Lbox;