import React from "react";
import './comp3.css';

function Alloc(){

    return(
        <>
        <div className=" rounded border p-3" style={{height:'210px'}}>
        
          <span className="col-4">
          <div className="scrollable-column rounded border border-dark m-1" style={{ height: '170px', width:'320px'}}>
                <table className="table table-bordered table-sm m-3">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Parts</th>
                    <th scope="col">Allocated</th>
                    <th scope="col">Remaining</th>
                </tr>
            </thead>
            <tbody>
                
                
            </tbody>
           </table>

          
          </div>

        </span>

        </div>
        </>
    );
}
export default Alloc;