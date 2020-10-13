import React from "react";
import Logo from "./pics/pokelogo.jpg";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
      }}
    >
      <div style={{ marginLeft: "30px", marginTop: "10px" }}>
        <p>Contactinfo: jenny-stokkevag.berg@capgemini.com</p>
        <p>All rights reserved by Capgemini. Copyright © 2020</p>
      </div>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        {/* <h1>CapAthon 2020</h1>
        <h3 style={{ marginLeft: "20px", marginTop: "-25px" }}>
          Gotta HACK'em all!
        </h3> */}
        <img src={Logo} className="footer-logo" />
      </div>
      <div>
        <img
          src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
          alt="Capgemini"
          style={{ paddingTop: "30px", marginLeft: "55%" }}
        ></img>
      </div>
    </div>
  );
};

export default Footer;
