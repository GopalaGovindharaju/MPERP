import React, { useState, useRef } from "react";
import axios from 'axios';
import { utils, read } from "xlsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import MyComponent from "./format";

function Browse({ handleLoadButtonClick, customerName, productName, productNumber }) {
  const [excelData, setExcelData] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
      setExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  const cancelFile = () => {
    fileInputRef.current.value = null;
    setExcelData([]);
  };

  const handleDone = async () => {
    if (excelData.length === 0) {
      alert("Excel data is empty");
      return;
    }

    try {
      const file = fileInputRef.current.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append('customerName', customerName);
      formData.append('productName', productName);
      formData.append('productNumber', productNumber);

      const response = await axios.post('http://127.0.0.1:8000/bom/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (typeof handleLoadButtonClick === 'function') {
        handleLoadButtonClick();
      }

      console.log(response.data);
      if(response.data === "File received and data stored in the database.")
      {
        alert("Loaded successfully!");
      }
      if(response.data === "File already exists."){
        alert("File Already Exist!");
      }
      
      fileInputRef.current.value = null;
      setExcelData([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="but1">
      <center>
        <div className="button-container custom-browse">
          <label htmlFor="file"><MyComponent/></label>
          <input type="file" className="m-1 btn-sm" name="file" onChange={handleFileChange} accept=".xlsx, .xls" ref={fileInputRef} />
          {excelData.length > 0 && (
            <button className="btn btn-secondary btn-block btn-sm custom-cancel" style={{ width: '80px' }} onClick={cancelFile}>
              Cancel
            </button>
          )}
          {excelData.length > 0 && (
            <button className="btn btn-block custom-done btn-sm text-white" style={{ width: '70px' }} onClick={handleDone}>
              LOAD
            </button>
          )}
        </div>
      </center>
    </div>
  );
}

export default Browse;
