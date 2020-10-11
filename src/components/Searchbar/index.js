import React from "react";
import "./style.css";


function Searchbar() {
  
  return <div className = "row mx-auto">
    <input type="text" className="searchbar col-6" id="searchInput"></input>
    <button className="col-4" id="submitSearch">
      Submit
    </button>
    </div>
  

}

export default Searchbar;
