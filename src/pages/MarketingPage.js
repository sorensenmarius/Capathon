// import src from "*.bmp";
import React, { useState } from "react";
import Flyer from "../resources/flyer.png";
import "../styles/marketStyles.css";
import "../styles/money.css"

const MarketingPage = () => {
  return (
    <div className="outerImg">
      <div class="container">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <h1>LATEST FROM THE MARKETING TEAM!</h1>
      <img src={Flyer} alt="new" />
    </div>
  );
};

export default MarketingPage;
