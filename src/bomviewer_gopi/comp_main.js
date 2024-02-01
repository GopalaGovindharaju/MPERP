import React from "react"
import './component.css';
import Details from "./details";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner3 from "../planner_chitra/banner3"



function Comp() {
  const isAuthorized = localStorage.getItem("isAuthorized");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthorized !== "Bomviewer" && isAuthorized !== "Planner" && isAuthorized !== "Admin") {
      navigate("/"); 
    }
  }, []);

  
  return (
    <div className="App">
      <Banner3 name="BomViewer"/>
      <Details/>  
     </div>

      
   
   
  );
}

export default Comp;