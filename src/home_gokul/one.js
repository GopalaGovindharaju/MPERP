import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./give.css";
import Logo from "./Images/Logo.png";
import Comp from "../bomviewer_gopi/comp_main";
import Component3 from "../planner_chitra/comp3_main";
import Leftbox from "../inspection/leftbox";
import Table from "../operator/table2";
import Lbox from "../inspector/lbox";
import axios from "axios";
import DropdownButton from "./two";

function Disp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLoginPopup, setShowLoginPopup] = useState(
    localStorage.getItem("showLoginPopup") === "true" ? true : false
  );
  const [showSignupPopup, setShowSignupPopup] = useState(
    localStorage.getItem("showSignupPopup") === "true" ? true : false
  );
  const [isAuthorized, setIsAuthorized] = useState(
    localStorage.getItem("isAuthorized") || ""
  );
  const [signed, setSigned] = useState(
    localStorage.getItem("signed") === "true" ? true : false
  );
  useEffect(() => {
    localStorage.setItem("showLoginPopup", showLoginPopup.toString());
  }, [showLoginPopup]);

  useEffect(() => {
    localStorage.setItem("showSignupPopup", showSignupPopup.toString());
  }, [showSignupPopup]);

  useEffect(() => {
    localStorage.setItem("isAuthorized", isAuthorized);
  }, [isAuthorized]);

  useEffect(() => {
    localStorage.setItem("signed", signed.toString());
  }, [signed]);
  


 
  const handleNavigationBom = () => {
    if (signed) {
      if (isAuthorized === "Bomviewer" || isAuthorized === "Planner" || isAuthorized === "Admin") {
        navigate("/Bom");
      } else {
        alert("Sorry, you don't have permission to access the BOM component.");
      }
    } else {
      alert("Please sign in to access the BOM component.");
    }
  };
  
  const handleNavigationPlanner = () => {
    if (signed) {
      if (isAuthorized === "Planner" || isAuthorized === "Admin") {
        navigate("/planner");
      } else {
        alert("Sorry, you don't have permission to access the Planner component.");
      }
    } else {
      alert("Please sign in to access the Planner component.");
    }
  };
  
  const handleNavigationOperator = () => {
    if (signed) {
      if (isAuthorized === "Operator" || isAuthorized === "Admin" || isAuthorized === "Planner") {
        navigate("/operator");
      } else {
        alert("Sorry, you don't have permission to access the Operator component.");
      }
    } else {
      alert("Please sign in to access the Operator component.");
    }
  };
  
  const handleNavigationMachine = () => {
    if (signed) {
      if (isAuthorized === "Machine" || isAuthorized === "Admin" || isAuthorized === "Planner") {
        navigate("/mach");
      } else {
        alert("Sorry, you don't have permission to access the Machine component.");
      }
    } else {
      alert("Please sign in to access the Machine component.");
    }
  };
  
  const handleNavigationCustomer = () => {
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
  const handleNavigationInspection = () => {
    if (signed) {
      if (isAuthorized === "Inspection" || isAuthorized === "Admin" || isAuthorized === "Operator") {
        navigate("/inspection");
      } else {
        alert("Sorry, you don't have permission to access the Inspection component.");
      }
    } else {
      alert("Please sign in to access the Inspection component.");
    }
  };
  
  const handleNavigationInspector = () => {
    if (signed) {
      if (isAuthorized === "Inspector" || isAuthorized === "Admin") {
        navigate("/inspector");
      } else {
        alert("Sorry, you don't have permission to access the Inspector component.");
      }
    } else {
      alert("Please sign in to access the Inspector component.");
    }
  };
    

  const handleSignIn = () => {
    setShowLoginPopup(true);
    setShowSignupPopup(false);
  };

  const handleSignup = () => {
    setShowSignupPopup(true);
    setShowLoginPopup(false);
  };

  const handleLogout = () => {
    setSigned(false);
    setIsAuthorized("");
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    const data = {
      Emp_Name: newEmpName,
      Emp_Id: newEmpId,
      Password: newPassword,
    };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/login/", data)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        if (!response.data) {
          alert("User Can't Found");
        } else {
          setSigned(true);
          setIsAuthorized(response.data);
        }
        setNewEmpName("");
        setNewEmpId("");
        setNewPassword("");
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("login failed");
      });
    setShowLoginPopup(false);
  };
  
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    const data = {
      Emp_Name: newEmpName,
      Emp_Id: newEmpId,
      Emp_Role: newRole,
      Password: newPassword,
    };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/login/signin/", data)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        setNewEmpName("");
        setNewEmpId("");
        setNewRole("");
        setNewPassword("");
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("failed");
      });

    setShowSignupPopup(false);
  };

  const handleLoginCancel = () => {
  setShowLoginPopup(false);
  setShowSignupPopup(false);
  setNewEmpName("");
  setNewEmpId("");
  setNewPassword("");
};


  const [newEmpName, setNewEmpName] = useState("");
  const [newEmpId, setNewEmpId] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleNewEmpNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(value) || value === "") {
      const formattedName =
        value.charAt(0).toUpperCase() + value.slice(1);
      setNewEmpName(formattedName);
    }
  };

  const handleNewEmpIdChange = (event) => {
    const value = event.target.value;
    const regex = /^[A-Za-z0-9]*$/;
    if (regex.test(value) || value === "") {
      setNewEmpId(value);
    }
  };

  const handleNewRoleChange = (event) => {
    const enteredRole = event.target.value;
    const formattedRole =
      enteredRole.charAt(0).toUpperCase() + enteredRole.slice(1);
    setNewRole(formattedRole);
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  

  return (
    <div className="container-fluid w-100 p-0 header-design">
        <div id="title1" className="row">
          <div className="col d-flex flex-row">
            <img src={Logo} alt="" style={{width:'600px'}} id="logo" />
          </div>
          <div className="col d-flex flex-row-reverse">
          <span className="row" id="r5">
              <p>
                | Sheet metal fabrication | Welding | Finishing | Assembly | <br></br>
                | Contact: +91- 94432 27570 |
                Email ID: info@aceelectricals.in
              </p>
            </span>
          </div>
        </div>
        <div
          id="bb" className="bg-gradient"
          style={{ marginLeft: "0%", backgroundColor: "#69b4ff" }}
        >
          <Routes>
            <Route path="/Bom" element={<Comp />} />
            <Route path="/planner" element={<Component3 />} />
            <Route path="/inspection" element={<Leftbox />} />
            <Route path="/operator" element={<Table />} />
            <Route path="/inspector" element={<Lbox />} />
          </Routes>

          <button className="text-dark btn-2" onClick={handleNavigationBom}>
  BOM
</button>
<button className="text-dark btn-2 rounded" onClick={handleNavigationPlanner}>
  Planning
</button>
<button className="text-dark btn-2 rounded" onClick={handleNavigationOperator}>
  Operator
</button>
<button className="text-dark btn-2 rounded" onClick={handleNavigationMachine}>
  Machine
</button>
<DropdownButton/>
<button className="text-dark btn-2 rounded" onClick={handleNavigationInspection}>
  QA
</button>
<button className="text-dark btn-2 rounded" onClick={handleNavigationInspector}>
  QC
</button>

          

          {showLoginPopup ? (
            <div className="login-popup">
              <div className="box">
                <div className="form">
                  <h2>Sign in</h2>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newEmpName}
                        pattern="[A-Za-z\s]+"
                        onChange={handleNewEmpNameChange}
                        required="required"
                      />
                      <span>Employee Name</span>
                      <i></i>
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newEmpId}
                        pattern="[A-Za-z0-9]+"
                        onChange={handleNewEmpIdChange}
                        required="required"
                      />
                      <span>Employee ID</span>
                      <i></i>
                    </div>
                    <div className="inputBox">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required="required"
                      />
                      <span>Password</span>
                      <i></i>
                    </div>
                    <div className="links">
                      <button onClick={handleSignup}>Sign up</button>
                    </div>
                    <div className="button-group">
                      <input type="submit" value="Login" />
                      <button id="btn-cancel" onClick={handleLoginCancel}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div id="uu">
              {!showSignupPopup && !signed && (
                <button
                  className="rounded custom-btn btn-2"
                  onClick={handleSignIn} 
                >
                  <span className="text-dark">Sign In</span>
                </button>
              )}
              {!showLoginPopup && signed && (
    <button
      className="rounded custom-btn btn-2"
      onClick={handleLogout}
    >
      <span className="text-dark">Logout</span>
    </button>
  )}
              {!showLoginPopup && !signed && (
                <button
                  className="rounded custom-btn btn-2"
                  onClick={handleSignup} id="sbtn"
                >
                  <span className="text-dark">Sign up</span>
                </button>
              )}
            </div>
          )}

          {showSignupPopup && (
            <div
              className="login-popup"
              style={{ height: "550px", top: "59%" }}
            >
              <div className="box" style={{ height: "550px" }}>
                <div className="form">
                  <h2>Sign up</h2>
                  <form onSubmit={handleSignupSubmit}>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newEmpName}
                        pattern="[A-Za-z\s]+"
                        onChange={handleNewEmpNameChange}
                        required="required"
                      />
                      <span>Employee Name</span>
                      <i></i>
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newEmpId}
                        pattern="[A-Za-z0-9]+"
                        onChange={handleNewEmpIdChange}
                        required="required"
                      />
                      <span>Employee ID</span>
                      <i></i>
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newRole}
                        onChange={handleNewRoleChange}
                        required="required"
                      />
                      <span>Role</span>
                      <i></i>
                    </div>
                    <div className="inputBox">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required="required"
                      />
                      <span>Password</span>
                      <i></i>
                    </div>
                    <div className="button-group">
                      <input type="submit" value="Sign up" />
                      <button id="btn-cancel" onClick={handleLoginCancel}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  );
}

export default Disp;
