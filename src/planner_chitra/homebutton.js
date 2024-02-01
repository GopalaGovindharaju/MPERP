import React from 'react';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Disp from "../home_gokul/one";
import './home-icon.png';

const HomeButton = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className="banner">
      <Routes>
        <Route path="/" component={Disp}></Route>
      </Routes>
      <button className="home-button" onClick={home} style={{ marginLeft: '30px', marginTop: '15px' }}>
        
      </button>
    </div>
  );
};

export default HomeButton;
