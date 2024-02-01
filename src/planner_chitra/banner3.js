import React from "react";
import { Link } from "react-router-dom";
import CurrentTime from './timeee';
import CurrentDate from './datee';

function Banner3(props) {
  return ( 
    <div className="banner">
    <div className="container-fluid text-center">
  <div className="row text-white bg-gradient text-center py-2"id="banner">
    <div className="col text-start">
    <Link to="/" style={{ paddingLeft: '20px', paddingTop: '10px' }}>
          <img src={require('./home.png')} alt="home" className="home-icon" width="80" height="50" />
        </Link>
    </div>
    <div className="col">
    <div className="text-white text-center" style={{textAlign:'center'}}>
          <h1>{props.name}</h1>
        </div>
    </div>
    <div className="col text-end">
    <div className="row justify-content-end" style={{paddingBottom:'0px'}}>
              <CurrentDate />
          </div>
          <div className="row justify-content-end" style={{paddingBottom:'0px', marginTop:'-8px'}}>
              <CurrentTime />
          </div>
    </div>
  </div>
</div></div>
   
  );
}

export default Banner3;