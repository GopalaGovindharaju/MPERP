import React from "react";
import { useState } from "react";
import './Table.css';
import ToggleButton from "./toggle";
import CheckboxExample from "./check";

function Table() {

    const [showAnotherTab, setshowAnotherTab] = useState(false);

    const handleSubmitButtonClick = () => {
        setshowAnotherTab(true);
    };


    return(
        <div className="container-fluid">
            <center>
          
          <table className="table table-bordered table-sm" id="gg">
                <thead className="custom-table text-dark">
                <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">BOM Specification</th>
                    <th scope="col">BOM value</th>
                    <th scope="col">Operator Entry</th>
                    <th scope="col">Insp method</th>
                    <th scope="col">Inspector Entry</th>
                    <th scope="col">Approve/<br></br>Reject</th>
                    <th scope="col">Full part approved</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Reason for<br></br>Re-work</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row" id="sno">1</td>
                    <td>L</td>
                    <td>3</td>
                    <td>3</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                    <td contentEditable="true">3</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td rowSpan={5}><ToggleButton/></td>
                    <td rowSpan={5}><input type="text" className="tb2" id="commentstext" style={{width:"200px"}}></input></td>
                    <td contentEditable="true"id="notes"></td>
                </tr>

                <tr>
                    <td scope="row">2</td>
                    <td>W</td>
                    <td>2</td>
                    <td>2</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                    
                    <td contentEditable="true">2</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>H</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                
                    <td contentEditable="true">4</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <td scope="row">4</td>
                    <td>Hole</td>
                    <td>10</td>
                    <td>10</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>

                    <td contentEditable="true">10</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <td scope="row">5</td>
                    <td>Angle</td>
                    <td>90</td>
                    <td>90</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                    <td contentEditable="true">90</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>
                </tbody>    
                </table>  
                </center>
        <br></br><center>
        <button id="finalsubmit" className="btn btn-primary text-white rounded" onClick={handleSubmitButtonClick}>Submit</button>
        {showAnotherTab ?  <Table onButtonClick={handleSubmitButtonClick} /> : null}
        <br></br></center>
    </div>

);
}

export default Table;