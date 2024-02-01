import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function JobDetailsForm(props) {
  const customerInputRef = useRef(null);

  useEffect(() => {
    if (customerInputRef.current) {
      customerInputRef.current.focus();
    }
  }, []);
    return(
         <div>
       <div className="card w=-50" id="customcard">
  <h3 className="card-header custom-bg" >Job Details</h3>
  <div className="card-body custom-bg1">
    <center> 
  <form className="needs-validation" noValidate> 
    <div className='row'>
      
        <div className='col'>
        <div className="form-group row">  
        <label htmlFor="cus" className="col-md-4" id="custab">Customer</label>
        <div className="col-md-4">
        <input type="text" id="cus" name="cus" className="input-fields customtf form-control"/><br></br><br></br>
        </div>
        </div>
        </div>

        <div className='col'>
        <div className="form-group row">  
        <label htmlFor="cus" className="col-md-4" id="custab">Date / time</label>
        <div className="col-md-4">
        <input type="datetime-local" id="datetime" name="datetime" className="input-fields customtf  form-control" /><br></br><br></br>
        </div>
        </div>
        </div>
</div>

<div className='row'>
        <div className='col'>
        <div className="form-group row">  
        <label htmlFor="cus" className="col-md-4" id="custab">Part Number</label>
        <div className="col-md-4">
        <input type="text" id="pnum" name="pnum" className="input-fields customtf  form-control"/><br></br><br></br>
        </div>
        </div>
        </div>
        <div className='col'>
        <div className="form-group row">  
        <label htmlFor="qty" className="col-md-4" id="custab">#Qty Completed</label>
        <div className="col-md-4">
        <input type="text" id="qty" name="qty" className="input-fields customtf  form-control"/><br></br><br></br>
        </div>
        </div>
        </div>
</div>

<div className='row'>
        <div className='col'>
        <div className="form-group row">  
        <label htmlFor="batch" className="col-md-2" id="custab">Batch</label>
        <div className="col-md-2">
        <input type="text" id="batch" name="batch" className="input-fields customtf  form-control"/><br></br><br></br>
        </div>
        </div>
        </div>
</div>

<div className='row'>
        <div className='col'>
        <div className="form-group row">  
        <label htmlFor="cus" className="col-md-4"></label>
        <div className="col-md-4">
        <button type="button" className="btn btn-block text-white" style={{width:'150px', backgroundColor:'#5E7D7E'}} id="bb1">Start job</button><br></br><br></br>
        </div>
        </div>
        </div>
        <div className='col'>
        <div className="form-group row">  
        <label htmlFor="cus" className="col-md-4"></label>
        <div className="col-md-4">
        <button type="button" className="btn  btn-block text-white" style={{width: '150px',backgroundColor:'#5E7D7E'}} id="bb2">Update status</button><br></br><br></br>
        </div>
        </div>
        
        </div>
</div>
    <center>
    <label htmlFor="urgent" id="custab1">Urgent work</label>
    <input type="text" id="urgent" name="urgent" className="input-field border border-dark rounded " style={{width: '200px'}}/><br></br><br></br>
</center><br></br>
<center>
    <label htmlFor="batch" className="custab">Balance</label>
    <input type="text" id="balance" name="balance" className="input-field border border-dark rounded " style={{width: '200px'}} />
</center>
        </form>
      </center>
    </div>
  </div></div>
  );
}
export default JobDetailsForm;