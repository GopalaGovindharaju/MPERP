import React from "react";
import "./table2.css";
import JobDetailsForm from "./jobd.js";
import { useState, useEffect } from "react";
import Box from "./box";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function handleInspectionButtonClick(navigate) {
  navigate("/inspection");
}

function Table() {
  const navigate = useNavigate();
  const isAuthorized = localStorage.getItem("isAuthorized");

  useEffect(() => {
    // Check if the user is authorized to access this component
    if (isAuthorized !== "Operator" && isAuthorized !== "Admin" && isAuthorized !== "Planner") {
      // Redirect to the appropriate route if not authorized
      navigate("/"); // Replace '/' with the desired route for unauthorized access
    }
  }, []);

  const [showJobDetails, setShowJobDetails] = useState(false);

  const handleJobDetailsButtonClick = () => {
    setShowJobDetails(true);
  };

  const handleViewUpdateJobButtonClick = () => {
    setShowJobDetails(false);
  };

  return (
    <div className="App">
      <div>
        <Box />
      </div>

      <header className="tab">
        <div className="scrollable-column rounded border m-3" style={{ height: "500px", overflow: "auto" }}>
          <table className="table" table border="1">
            <thead className="table-header">
              <tr>
                <th>Sno</th>
                <th>Part Number</th>
                <th>Customer</th>
                <th>2 Drawing</th>
                <th>3 Drawing</th>
                <th># of Bends</th>
                <th>Part Qty</th>
                <th>Total # of Bends</th>
                <th>Time remaining</th>
                <th>Completed</th>
                <th>Approved</th>
                <th>Rejected Inspection</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td>
                  <a href="#">view</a>
                </td>
                <td>
                  <a href="#">view</a>
                </td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>
                  <input type="button" value="Inspection" className="bg-primary border w-100 text-white" id="bl" onClick={() => handleInspectionButtonClick(navigate)}/>
                </td>
                <td>
                  <input type="button" value="View/Update job" className="bg-primary border w-100 text-white" id="bl" onClick={handleJobDetailsButtonClick} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>
                  <input type="button" value="Inspection" className="bg-primary border w-100 text-white" id="bl" onClick={() => handleInspectionButtonClick(navigate)}/>
                </td>
                <td><input type="button" value="View/Update job" className="bg-primary border w-100 text-white" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
              <tr>
                <td>3</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>
                  <input type="button" value="Inspection"className="bg-primary border w-100 text-white" id="bl" onClick={() => handleInspectionButtonClick(navigate)}/>
                </td>
                <td><input type="button" value="View/Update job" className="bg-primary border w-100 text-white" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
              <tr>
                <td>4</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>
                  <input type="button" value="Inspection" className="bg-primary border w-100 text-white" id="bl" onClick={() => handleInspectionButtonClick(navigate)}/>
                </td>
                <td><input type="button" value="View/Update job" className="bg-primary border w-100 text-white" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
              <tr>
                <td>5</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>
                  <input type="button" value="Inspection" className="bg-primary border w-100 text-white" id="bl" onClick={() => handleInspectionButtonClick(navigate)}/>
                </td>
                <td><input type="button" value="View/Update job" className="bg-primary border w-100 text-white" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
              <tr>
                <td>6</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>
                  <input type="button" value="Inspection" className="bg-primary border w-100 text-white" id="bl" onClick={() => handleInspectionButtonClick(navigate)}/>
                </td>
                <td><input type="button" value="View/Update job" className="bg-primary border w-100 text-white" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>

      {showJobDetails ? <JobDetailsForm onButtonClick={handleViewUpdateJobButtonClick} /> : null}
    </div>
  );
}

export default Table;
