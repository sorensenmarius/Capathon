import React from "react";
//header image with search inside
function Header({ handleChange }) {
  return (
    <div className="searchContainer">
      <input
        className="input-styled"
        type="text"
        placeholder="Search for pokemon"
        onChange={handleChange}
      />
    </div>
  );
}

export default Header;
