import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useNavigate } from "react-router-dom";
import './PlantPage.css';

const PlantPage = () => {
    const navigate = useNavigate();
    const handleAllmyplantClick = () => {
        navigate("/allmyplantpage");
    };
  return (
    <div>
      <Header title="My Plants" />
      <div className="allmyplantsbutton" onClick={handleAllmyplantClick}>all my plant</div>
      <div className="plantheader" >Day.21</div>
      
      <div className="mainplant"></div>
      <Footer />
    </div>
  );
}

export default PlantPage;
