// import src from "*.bmp";
import React, { useState } from "react";
import Flyer from "../resources/flyer.png";
import "../styles/marketStyles.css";

const MarketingPage = () => {
  return (
    <div className="outerImg">
      <h1>LATEST FROM THE MARKETING TEAM!</h1>
      <img src={Flyer} alt="new" />
    </div>
  );
};

export default MarketingPage;
