import React from "react"
import './Table.css'

function Box(){
    return(
        <div className="card-body custom-cardbdy1">
    
    <form className="needs-validation" noValidate>
    <div className="row insrow">
    

    <div className="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel">Machine Number</label>
        <div className="col-sm-6">
        <input type='text' className="form-control custom-textfield0" placeholder='AC-40'/>
        </div>
        </div>
    </div>

    <div className="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel">Machine Operator</label>
        <div className="col-sm-6">
        <input type='name' className="form-control custom-textfield0" placeholder='Harish'/>
        </div>
        </div>
    </div>

    <div className="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel" style={{textAlign:'right'}}>Shift</label>
        <div className="col-sm-6">
        <select className="form-control custom-textfield0" required >
        <option value="morning">morning</option>
        <option value="evening">evening</option>
        <option value="night">night</option>
        </select>
        </div>
        </div>
    </div>   
    <div className="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel">Customer</label>
        <div className="col-sm-6">
        <input type='name' className="form-control custom-textfield0" placeholder='Harish'/>
        </div>
        </div>
    </div>

    </div><br></br>
    <div className="row insrow2 ">
    <div className="col">
<div className="input-group input-group-sm">
<label className="col-sm-6 col-form-label custlabel">Part Number</label>
<div className="col-sm-6">
<input type='number' className="form-control custom-textfield0" placeholder='part_number'/>
</div>
</div>
</div>

    <div className="col">
        <div className="input-group input-group-sm">
        
        <div className="col-sm-6">
        
        </div>
        </div>
    </div>
    <div className="col">
<div className="input-group input-group-sm">
<div className="col-sm-6">
</div>
</div>
</div>

    

    <div className="col">
    <div className="col-sm-15"><center>
            <button type="submit" className="btn btn-primary text-white form-control " required style={{width:'100px'}}>Submit </button>
        </center></div>               
    </div>   

    </div><br></br>
    </form>
    </div>
    );
}

export default Box;
