import React, { useState,useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./give.css";

const DropdownButton = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isAuthorized, setIsAuthorized] = useState(
    localStorage.getItem("isAuthorized") || ""
  );
  const [signed, setSigned] = useState(
    localStorage.getItem("signed") === "true" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("isAuthorized", isAuthorized);
  }, [isAuthorized]);

  useEffect(() => {
    localStorage.setItem("signed", signed.toString());
  }, [signed]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleNavigationCustomerorderdata = () => {
    if (signed) {
      if (isAuthorized === "Customer" || isAuthorized === "Admin" || isAuthorized === "Planner") {
        navigate("/cust_assest");
      } else {
        alert("Sorry, you don't have permission to access the Customer component.");
      }
    } else {
      alert("Please sign in to access the Customer component.");
    }
  };

  const handleNavigationCustomer = () => {
    if (signed) {
      if (isAuthorized === "Customer" || isAuthorized === "Admin" || isAuthorized === "Planner") {
        navigate("/custdata");
      } else {
        alert("Sorry, you don't have permission to access the Customer component.");
      }
    } else {
      alert("Please sign in to access the Customer component.");
    }
  };

  return (
    <>
    <div className="dropdown">
      <button className="text-dark btn-2 rounded" onClick={toggleDropdown}>
        Customer
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <button className="text-dark btn-2 rounded" id="btn2" onClick={handleNavigationCustomerorderdata}>
            Customer Order
          </button>
          <button className="text-dark btn-2 rounded" onClick={handleNavigationCustomer}>
            Customer Details
          </button>
          {/* Add more dropdown items if needed */}
        </div>
      )}
    </div>
    </>
  );
};


export default DropdownButton;
