import React from "react";

const CurrentDate = () => {
    // Get the current date
    const currentDate = new Date();
  
    // Format the date as per your requirement
    const formattedDate = currentDate.toDateString();
  
    // Render the formatted date
    return(
      <div className="row" id="current-date">
        <p style={{paddingRight: '40px'}}>{formattedDate}</p>
        </div>  
    ); 
  };
  

  export default CurrentDate;