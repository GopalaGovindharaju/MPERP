import { useState, useEffect } from "react";
import axios from "axios";
import './component.css';
import Browse from "./browse";
import { isEqual } from 'lodash';


function Details() {
  const [customerName, setCustomerName] = useState('');
  const [productNames, setProductNames] = useState([]);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [productNumber, setProductNumber] = useState('');
  const [customerNames, setCustomerNames] = useState([]);
  const [selectedCustomerName, setSelectedCustomerName] = useState('');
  const [showBrowse, setShowBrowse] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [showAdd, setShowAdd] = useState(true);
  const [showViewCancel, setShowViewCancel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const [editableRows, setEditableRows] = useState([]);
  

  useEffect(() => {
    fetchCustomerNames();
  }, []);

  useEffect(() => {
    if (customerName !== '') {
      fetchProductNames();
    }
  }, [customerName]);

  useEffect(() => {
    if (selectedProductName !== '') {
      fetchProductNumbers();
    }
  }, [selectedProductName]);

  const cancelFile = () => {
    setTableData([]);
    setShowAdd(true);
    setShowViewCancel(false);
    setShowEdit(false);
    setShowSave(false);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    if (selectedCustomerName === '' || selectedProductName === '') {
      alert('Please select Customer Name and Product Name');
    } else {
      
    
    const tableName = {
      table_name: `${selectedCustomerName}_${selectedProductName}_${productNumber}`
    };
    const shouldDelete = window.confirm(`Are you sure you want to delete the BOM "${tableName.table_name}"?`);
    if (!shouldDelete) {
      return;
    }
  
    try {
      console.log(tableName);
      const response = await axios.post('http://127.0.0.1:8000/bom/deletetable/', tableName);
      console.log(response.data);
      setTableData([]);
        setShowAdd(true);
        setShowViewCancel(false);
        setShowEdit(false);
        setShowSave(false);
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.log('Error deleting table:', error.response.data.error);
    }
  }
  };
  const handleEdit = () => {
    const editableRowsData = tableData.map(row => ({ ...row }));
    setEditableRows(editableRowsData);
    setShowEdit(false);
    setShowSave(true);
  };


  const handleSave = async (event) => {
  event.preventDefault();

  const modifiedRows = editableRows.filter((row, index) => {
    const originalRow = tableData[index];
    return !isEqual(row, originalRow);
  });

  

  setEditableRows([]);
  setTableData(editableRows);
  setShowSave(false);
  setShowEdit(true);

  const updatedData = {
    data: modifiedRows,
    table_name: `${selectedCustomerName}_${selectedProductName}_${productNumber}`
  };

  axios.post('http://127.0.0.1:8000/bom/update/', updatedData)
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      console.log('Error updating data:', error.response.data.error);
    });
};

  const fetchTableData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/bom/tabledata/?customerName=${selectedCustomerName}&productName=${selectedProductName}&productNumber=${productNumber}`);
      const { data } = response;
      setShowViewCancel(true);
      setShowEdit(true);
      setTableData(data);
    } catch (error) {
      setShowAdd(true);
      alert("There is No Exist BOM for this customer! Add the BOM");
    }
  };

  const handleViewClick = async (event) => {
    event.preventDefault();
    if (selectedCustomerName === '' || selectedProductName === '') {
      alert('Please select Customer Name and Product Name');
    } else {
      setShowAdd(false);
      fetchTableData();
    }
  };

  const fetchCustomerNames = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/bom/custname/');
      const { data } = response;
      setCustomerNames(data.customerNames);
    } catch (error) {
      console.log("Error fetching customer names:", error);
    }
  };

  const fetchProductNames = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/bom/proname/?customerName=${customerName}`);
      const { data } = response;
      setProductNames(data.productNames);
    } catch (error) {
      console.log("Error fetching product names:", error);
    }
  };

  const fetchProductNumbers = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/bom/pronumber/?productName=${selectedProductName}&customerName=${selectedCustomerName}`);
      const { data } = response;
      setProductNumber(data.productNumbers[0]);
    } catch (error) {
      console.log("Error fetching product numbers:", error);
    }
  };

  const handleCustomerNameChange = (event) => {
    const selectedCustomer = event.target.value;
    setCustomerName(selectedCustomer);
    setSelectedCustomerName(selectedCustomer);
  };

  const handleProductNameChange = (event) => {
    setSelectedProductName(event.target.value);
  };

  const handleProductNumberChange = (event) => {
    setProductNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCustomerName === '' || selectedProductName === '') {
      alert('Please select Customer Name and Product Name');
    } else {
      setShowBrowse(true);
    }
    ;
  };

  const handleRowChange = (index, columnName, value) => {
    const updatedRows = editableRows.map((row, rowIndex) => {
      if (rowIndex === index) {
        return { ...row, [columnName]: value };
      }
      return row;
    });
    setEditableRows(updatedRows);
  };

  return (
    <div className="card custom-card" id="r2">
      <div className="card-body custom-cardbdy" id="r1">
        <form className="needs-validation" noValidate>
          <div className="row" id="r1">
            <div className="col-auto " id="col3">
              <div className="input-group input-group-sm">
                <label className="col-sm-7 col-form-label custlabel form-control-sm">Customer Name:</label>
                <div className="col-sm-5">
                  <select className="form-control form-control-sm custom-textfield0" required onChange={handleCustomerNameChange}>
                    <option value="" id="oe">Select Customer</option>
                    {customerNames.map((customerName) => (
                      <option key={customerName} value={customerName}>{customerName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-auto" id="col3">
              <div className="input-group input-group-sm">
                <label className="col-sm-7 col-form-label form-control-sm custlabel">Product Name:</label>
                <div className="col-sm-5">
                  <select className="form-control form-control-sm custom-textfield0" required onChange={handleProductNameChange}>
                    <option value="" id="oe">Select Product Name</option>
                    {productNames.map((productName) => (
                      <option key={productName} value={productName}>{productName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-auto" id="col3">
              <div className="input-group input-group-sm">
                <label className="col-sm-7 col-form-label form-control-sm custlabel" id="oe">Product Number:</label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm custom-textfield0"
                    required
                    value={productNumber}
                    onChange={handleProductNumberChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-auto" id="col3">
              <button className="btn btn-primary btn-sm" style={{ width: '70px' }} onClick={handleViewClick}>View</button>
            </div>
            <div className="col-auto" id="col3">
            <button className="btn btn-danger btn-sm" onClick={handleDelete} style={{ width: '70px' }}>
          Delete
        </button></div>
            <div className="col-auto" id="col3">
              {showEdit && (
                <button className="btn btn-primary btn-sm" onClick={handleEdit} style={{ width: '70px',marginRight:'10px' }}>
                  Edit
                </button>
              )}
              {showSave && (
                <button className="btn btn-primary btn-sm" onClick={handleSave} style={{ width: '70px',marginRight:'10px' }}>
                  Save
                </button>
              )}
              {showViewCancel && (
                <button className="btn btn-secondary btn-block btn-sm custom-cancel" style={{ width: '80px' }} onClick={cancelFile}>
                  Cancel
                </button>
              )}
              {showAdd && (
                <button className="btn btn-primary btn-sm" style={{ width: '70px' }} onClick={handleSubmit}>
                  Add
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="table-container-wrapper">
      {tableData.length > 0 && (
    <table className="table-container">
      <thead>
        <tr>
          {Object.keys(tableData[0]).map((columnName) => (
            <th key={columnName}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.sort((a, b) => a.id - b.id).map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((columnName) => (
              <td key={columnName}>
                {editableRows.length > 0 ? (
                  <input
                    type="text"
                    value={editableRows[index][columnName]}
                    onChange={(event) => handleRowChange(index, columnName, event.target.value)}
                  />
                ) : (
                  row[columnName]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
)}</div>


      {showBrowse && <Browse customerName={selectedCustomerName} productName={selectedProductName} productNumber={productNumber} />}
    </div>
  );
}

export default Details;
